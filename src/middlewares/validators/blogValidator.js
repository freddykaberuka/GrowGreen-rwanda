import schema from '../../helpers/validateSchemas/blogValidationSchema';
import Util from '../../helpers/utils';

const util = new Util();
export default class Blog {
  // eslint-disable-next-line consistent-return
  static createBlog(req, res, next) {
    const {
      error
    } = schema.validate(req.body);
    if (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
    next();
  }
}
