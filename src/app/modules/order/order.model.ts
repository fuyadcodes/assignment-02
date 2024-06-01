import { Schema, model } from 'mongoose'
import IOrder from './order.interface'

const orderSchema = new Schema<IOrder>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    productId: {
        type: String,
        ref: 'Product',
        required: [true, 'Product ID is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1'],
    },
})

export const OrderModel = model<IOrder>('Order', orderSchema)
