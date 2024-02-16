import Joi from "joi";

const validateOwner = Joi.object({
  owner: Joi.string().hex().required().messages({
    "any.required": "Missing required owner field",
    "string.hex": "Owner must be a hexadecimal string",
    "string.length": "Owner must be 24 characters long",
  }),
});

export default validateOwner;
