import Joi from 'joi'

export const variantJoiSchema = Joi.object({
    type: Joi.string().required().messages({
        'string.empty': 'Type is required',
    }),
    value: Joi.string().required().messages({
        'string.empty': 'Value is required',
    }),
})

export const inventoryJoiSchema = Joi.object({
    quantity: Joi.number().required().messages({
        'number.base': 'Quantity is required',
    }),
    inStock: Joi.boolean().required().messages({
        'boolean.base': 'In stock is required',
    }),
})

export const productJoiSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Name is required',
    }),
    description: Joi.string().required().messages({
        'string.empty': 'Description is required',
    }),
    price: Joi.number().required().messages({
        'number.base': 'Price is required',
    }),
    category: Joi.string().required().messages({
        'string.empty': 'Category is required',
    }),
    tags: Joi.array().items(Joi.string()).required().messages({
        'array.base': 'Tags is required',
    }),
    variants: Joi.array().items(variantJoiSchema).required().messages({
        'array.base': 'Variants is required',
    }),
    inventory: inventoryJoiSchema.required().messages({
        'object.base': 'Inventory is required',
    }),
})
