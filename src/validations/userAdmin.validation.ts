import Joi from 'joi';

export const userAdmin = {
    body: Joi.object().keys({
        username:Joi.string().required(),
        password: Joi.string().required()
    })
};