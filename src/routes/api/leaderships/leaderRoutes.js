import express from 'express';
import leaderController from '../../../controllers/leaders';

const router = express();

router.post('/add', leaderController.createLeader);
router.get('/allLeader', leaderController.getLeaders);
router.get('/leader/:id', leaderController.getLeaderById);

export default router;
