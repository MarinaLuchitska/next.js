import Joi from 'joi';
import type { ICar } from '@/models/ICar';

export const carSchema = Joi.object<ICar>({
    brand: Joi.string().trim().min(2).max(30).required().messages({
        'string.empty': 'Brand is required',
        'string.min': 'Brand must be at least 2 characters',
    }),
    price: Joi.number().positive().required().messages({
        'number.base': 'Price must be a number',
        'number.positive': 'Price must be positive',
    }),
    year: Joi.number()
        .integer()
        .min(1900)
        .max(new Date().getFullYear())
        .required()
        .messages({
            'number.base': 'Year must be a number',
            'number.min': 'Year must be >= 1900',
            'number.max': 'Year cannot be from the future',
        }),
});
