import { Op } from 'sequelize';
import models from '../models';

const {
  Contact
} = models;
/**
 * @exports
 * @class AccomodationsService
 */
class ContactsService {
  /**
     * create new user
     * @static createAccomodations
     * @param {object} newContacts
     * @memberof ContactsService
     * @returns {object} data
     */
  static create(newContacts) {
    return Contact.create(newContacts);
  }

  static getMessages() {
    return Contact.findAll({
      attributes: ['names', 'email', 'subject', 'message'],
    },);
  }

  static findById(modelId) {
    return Contact.findOne({
      where: { id: modelId },
    });
  }

  static deleteById(contactId) {
    return Contact.destroy({ where: { id: contactId } });
  }
}
export default ContactsService;
