import { Request, Response } from 'express';
import { pool } from '../db/index';
import { AuthRequest } from '../middleware/auth.middleware';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const result = await pool.query(
      `SELECT id, name, username, avatar, cover_photo, bio, website, location,
       followers_count, following_count, created_at
       FROM users WHERE username = $1`,
      [username]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user: result.rows[0] });
  } catch (error) {
    console.error('getProfile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const { name, username, bio, website, location } = req.body;
    console.log('Updating profile for userId:', req.userId);
    const result = await pool.query(
      `UPDATE users SET 
        name = COALESCE($1, name),
        username = COALESCE($2, username),
        bio = COALESCE($3, bio),
        website = COALESCE($4, website),
        location = COALESCE($5, location),
        updated_at = NOW()
       WHERE id = $6 
       RETURNING id, name, username, bio, website, location, avatar, cover_photo`,
      [name, username, bio, website, location, req.userId]
    );
    res.json({ message: 'Profile updated!', user: result.rows[0] });
  } catch (error) {
    console.error('updateProfile error:', error);
    res.status(500).json({ message: 'Server error', error: String(error) });
  }
};

export const followUser = async (req: AuthRequest, res: Response) => {
  try {
    const followingId = parseInt(req.params.userId);
    const followerId = req.userId!;
    if (followerId === followingId) {
      return res.status(400).json({ message: 'You cannot follow yourself' });
    }
    await pool.query(
      'INSERT INTO follows (follower_id, following_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [followerId, followingId]
    );
    await pool.query('UPDATE users SET followers_count = followers_count + 1 WHERE id = $1', [followingId]);
    await pool.query('UPDATE users SET following_count = following_count + 1 WHERE id = $1', [followerId]);
    res.json({ message: 'Following!' });
  } catch (error) {
    console.error('followUser error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const unfollowUser = async (req: AuthRequest, res: Response) => {
  try {
    const followingId = parseInt(req.params.userId);
    const followerId = req.userId!;
    const result = await pool.query(
      'DELETE FROM follows WHERE follower_id = $1 AND following_id = $2',
      [followerId, followingId]
    );
    if (result.rowCount && result.rowCount > 0) {
      await pool.query('UPDATE users SET followers_count = followers_count - 1 WHERE id = $1', [followingId]);
      await pool.query('UPDATE users SET following_count = following_count - 1 WHERE id = $1', [followerId]);
    }
    res.json({ message: 'Unfollowed!' });
  } catch (error) {
    console.error('unfollowUser error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
