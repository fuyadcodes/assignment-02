import { Schema, model } from 'mongoose'
import { IInventory, IProduct, IVariant } from './product.interface'

const variantSchema = new Schema<IVariant>({
    type: {
        type: String,
        required: [true, 'Type is required'],
    },
    value: {
        type: String,
        required: [true, 'Value is required'],
    },
})

const inventorySchema = new Schema<IInventory>({
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'In stock is required'],
    },
})

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    tags: {
        type: [String],
        required: [true, 'Tags is required'],
    },
    variants: {
        type: [variantSchema],
        required: [true, 'Variants is required'],
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Inventory is required'],
    },
})

export const ProductModel = model<IProduct>('Product', productSchema)
