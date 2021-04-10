import leadersService from '../services/leaderServices';
import Util from '../helpers/utils';

const util = new Util();

export default class Leaders {
  static async createLeader(req, res) {
    try {
      const leader = {
        names: req.body.names,
        title: req.body.title,
        facebookAcc: req.body.facebookAcc,
        twitterAcc: req.body.twitterAcc,
        moreOn: req.body.moreOn,
      };
      const newLeader = await leadersService.create(leader);
      util.setSuccess(201, 'You have successfully save a new leader', newLeader);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

  static async getLeaders(req, res) {
    try {
      const leaders = await leadersService.getAllLeaders();
      util.setSuccess(200, 'List of Leaders', leaders);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }
  // get single leader

  static async getLeaderById(req, res) {
    try {
      const { id } = req.params;
      const message = await leadersService.findById(id);
      util.setSuccess(200, 'more info on Leader', message);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

  // delete a leader in the database

  static async deleteLeader(req, res) {
    try {
      const { id } = req.params;
      const messageDeletion = await leadersService.deleteById(id);
      util.setSuccess(200, 'a leader is deleted Successful', messageDeletion);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }
}
