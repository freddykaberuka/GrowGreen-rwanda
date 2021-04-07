import joi from 'joi';

const blogSchema = joi.object({
  title: joi.string().min(4).required(),
  content: joi.string().min(10).required(),
  conclusion: joi.string()

});

export default blogSchema;
