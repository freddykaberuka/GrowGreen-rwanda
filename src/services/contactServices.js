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
}
export default ContactsService;
