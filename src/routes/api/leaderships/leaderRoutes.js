import express from 'express';
import leaderController from '../../../controllers/leaders';

const router = express();

router.post('/add', leaderController.createLeader);
router.get('/allLeader', leaderController.getLeaders);

export default router;
