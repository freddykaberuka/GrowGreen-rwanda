import schema from '../../helpers/validateSchemas/contactValidationSchema';
import Util from '../../helpers/utils';

const util = new Util();
export default class Contact {
  // eslint-disable-next-line consistent-return
  static createContact(req, res, next) {
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
