import Joi from 'joi';

export const firSystemSchema = Joi.object({
  year: Joi.string().required().messages({
    'any.required': 'Year is required',
    'string.empty': 'Year cannot be empty'
  }),
  firNumber: Joi.string().required().messages({
    'any.required': 'FIR number is required',
    'string.empty': 'FIR number cannot be empty'
  }),
  district: Joi.string().required().messages({
    'any.required': 'District is required',
    'string.empty': 'District cannot be empty'
  }),
  policeStation: Joi.string().required().messages({
    'any.required': 'Police station is required',
    'string.empty': 'Police station cannot be empty'
  }),
  incidentDateTime: Joi.date().iso().required().messages({
    'any.required': 'Incident date and time is required',
    'date.iso': 'Incident date and time must be in ISO 8601 format'
  }),
  referenceNumber: Joi.string().required().messages({
    'any.required': 'Reference number is required',
    'string.empty': 'Reference number cannot be empty'
  }),
  currentDateTime: Joi.date().iso().required().messages({
    'any.required': 'Current date and time is required',
    'date.iso': 'Current date and time must be in ISO 8601 format'
  }),
  applicantName: Joi.string().required().messages({
    'any.required': 'Applicant name is required',
    'string.empty': 'Applicant name cannot be empty'
  }),
  applicantFatherName: Joi.string().required().messages({
    'any.required': 'Applicant father name is required',
    'string.empty': 'Applicant father name cannot be empty'
  }),
  nicNumber: Joi.string().length(13).pattern(/^[0-9]+$/).required().messages({
    'any.required': 'NIC number is required',
    'string.length': 'NIC number must be 13 digits long',
    'string.pattern.base': 'NIC number must be a number',
  }),
  phoneNumber: Joi.string().length(11).pattern(/^[0-9]+$/).required().messages({
    'any.required': 'Phone number is required',
    'string.length': 'Phone number must be 11 digits long',
    'string.pattern.base': 'Phone number must be a number',
  }),
  crime: Joi.array().items(Joi.string()).min(1).required().messages({
    'any.required': 'At least one crime is required',
    'array.min': 'At least one crime is required'
  }),
  initialReport: Joi.string().required().messages({
    'any.required': 'Initial report is required',
    'string.empty': 'Initial report cannot be empty'
  }),
  userId: Joi.string().required().messages({
    'any.required': 'User ID is required',
    'string.empty': 'User ID cannot be empty'
  })
});

export default { firSystemSchema };
