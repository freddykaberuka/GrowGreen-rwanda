import express from 'express';
import userRoutes from './users/userRoutes';
import contactRoutes from './contact/contactRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/contacts', contactRoutes);

export default router;
