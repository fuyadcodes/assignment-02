import { Request, Response } from 'express'
import { orderJoiSchema } from './order.validation'
import IOrder from './order.interface'
import { OrderService } from './order.service'

const createOrder = async (req: Request, res: Response) => {
    const { error } = orderJoiSchema.validate(req.body, { abortEarly: false })

    if (error) {
        return res.status(400).json({
            success: false,
            message: 'Validation error',
            errors: error.details.map((detail) => detail.message),
        })
    }

    try {
        const order: IOrder = req.body
        const result = await OrderService.createOrder(order)

        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            data: error,
        })
    }
}

const getOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getOrders()

        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            data: error,
        })
    }
}

const getOrdersByUserEmail = async (req: Request, res: Response) => {
    const { email } = req.query
    if (!email) {
        return res.status(400).json({
            success: false,
            message: 'Email parameter is required!',
        })
    }

    try {
        const result = await OrderService.getOrdersByUserEmail(email.toString())

        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            data: error,
        })
    }
}

export const OrderController = {
    createOrder,
    getOrders,
    getOrdersByUserEmail,
}
