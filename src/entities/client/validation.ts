import Joi from 'joi';

export const createClientSchema = Joi.object({
  ref: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  birthdate: Joi.date().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .trim()
    .required(),
  phone: Joi.string().required(),
  CIN: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
});

export const updateClientSchema = Joi.object({
  ref: Joi.string(),
  firstname: Joi.string(),
  lastname: Joi.string(),
  birthdate: Joi.date(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .trim(),
  phone: Joi.string(),
  CIN: Joi.string(),
  address: Joi.string(),
  city: Joi.string(),
});
