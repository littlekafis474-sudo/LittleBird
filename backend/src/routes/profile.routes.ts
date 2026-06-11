import { Router } from 'express';
import { getProfile, updateProfile, followUser, unfollowUser } from '../controllers/profile.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// GET /api/profile/:username
router.get('/:username', getProfile);

// PUT /api/profile (protected - must be logged in)
router.put('/', protect, updateProfile);

// POST /api/profile/follow/:userId (protected)
router.post('/follow/:userId', protect, followUser);

// DELETE /api/profile/unfollow/:userId (protected)
router.delete('/unfollow/:userId', protect, unfollowUser);

export default router;
