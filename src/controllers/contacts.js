import contactService from '../services/contactServices';
import Util from '../helpers/utils';

const util = new Util();

export default class Contacts {
  static async createContacts(req, res) {
    try {
      const contact = {
        names: req.body.names,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      };
      const newContact = await contactService.create(contact);
      util.setSuccess(201, 'You have successfully sent a Message', newContact);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }
}
