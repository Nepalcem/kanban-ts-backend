import Joi from "joi";

const boardGetSchema = Joi.object({
  hashedID: Joi.string().required().messages({
    "string.base": "Token must be a string",
  }),
});

export default boardGetSchema;
