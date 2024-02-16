import Joi from "joi";

const boardPatchSchema = Joi.object({
  hashedID: Joi.string().required().messages({
    "string.base": "HashedID must be a string",
  }),
  title: Joi.string().max(16).messages({
    "string.max": "Title must be no more than 16 symbols",
    "string.base": "Title must be a string",
  }),
});

export default boardPatchSchema;
