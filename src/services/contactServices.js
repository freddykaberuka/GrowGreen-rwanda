import models from '../models/index';

const { Contacts } = models.Contact;
/**
 * @exports
 * @class ContactsService
 */
class ContactsService {
  /**
     * create new Contact
     * @static createContacts
     * @param {object} newContacts
     * @memberof ContactsService
     * @returns {object} data
     */
  static create(newContacts) {
    return Contacts.create(newContacts);
  }
}
export default ContactsService;
