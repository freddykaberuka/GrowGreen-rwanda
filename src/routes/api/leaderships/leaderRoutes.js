import express from 'express';
import leaderController from '../../../controllers/leaders';

const router = express();

router.post('/add', leaderController.createLeader);

export default router;
