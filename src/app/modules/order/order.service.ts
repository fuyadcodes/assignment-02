import { OrderModel } from './order.model'
import IOrder from './order.interface'

const createOrder = async (order: IOrder) => {
    const result = await OrderModel.create(order)
    return result
}

const getOrders = async () => {
    const result = await OrderModel.find()
    return result
}

const getOrdersByUserEmail = async (email: string) => {
    const result = await OrderModel.find({ email })
    return result
}

export const OrderService = {
    createOrder,
    getOrders,
    getOrdersByUserEmail,
}
