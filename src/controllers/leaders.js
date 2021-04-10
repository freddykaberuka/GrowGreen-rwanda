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
}
