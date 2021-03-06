import contactsService from '../services/contactServices';
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
      const newContact = await contactsService.create(contact);
      util.setSuccess(201, 'You have successfully sent a Message', newContact);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

  static async getMessages(req, res) {
    try {
      const messages = await contactsService.getMessages();
      util.setSuccess(200, 'All Messages', messages);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

  static async getMessageById(req, res) {
    try {
      const { id } = req.params;
      const message = await contactsService.findById(id);
      util.setSuccess(200, 'message', message);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

  static async deleteMessage(req, res) {
    try {
      const { id } = req.params;
      const messageDeletion = await contactsService.deleteById(id);
      util.setSuccess(200, 'deleted Successful', messageDeletion);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }
}
