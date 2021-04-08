import express from 'express';
import contactController from '../../../controllers/contacts';
import contactValidator from '../../../middlewares/validators/contactValidator';

const router = express();

router.post('/create', contactValidator.createContact, contactController.createContacts);

export default router;
