import express from 'express';
import userRoutes from './users/userRoutes';
import contactRoutes from './contact/contactRoutes';
import leaderRoutes from './leaderships/leaderRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/contacts', contactRoutes);
router.use('/leaders', leaderRoutes);
export default router;
