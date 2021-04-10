import joi from 'joi';

const contactSchema = joi.object({
  names: joi.string().min(4).required(),
  email: joi.string().min(10).required(),
  subject: joi.string().required(),
  message: joi.string().required(),

});

export default contactSchema;
