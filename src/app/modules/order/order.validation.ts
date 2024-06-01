import Joi from 'joi'

export const orderJoiSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: true } })
        .required()
        .messages({
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required',
        }),
    productId: Joi.string().required().messages({
        'string.base': 'Product ID must be a string',
        'any.required': 'Product ID is required',
    }),
    price: Joi.number().min(0).required().messages({
        'number.base': 'Price must be a number',
        'number.min': 'Price must be a positive number',
        'any.required': 'Price is required',
    }),
    quantity: Joi.number().min(1).required().messages({
        'number.base': 'Quantity must be a number',
        'number.min': 'Quantity must be at least 1',
        'any.required': 'Quantity is required',
    }),
})
