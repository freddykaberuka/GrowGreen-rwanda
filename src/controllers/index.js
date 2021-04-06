/*eslint-disable */
import Util from '../helpers/utils';

const util = new Util();

const sendWelcome = (req, res) => {
  util.setSuccess(200, 'Welcome to Grow Green Rwanda');
  return util.send(res);
};

export default sendWelcome;
