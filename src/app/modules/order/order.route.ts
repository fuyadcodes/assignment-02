import express from 'express'
import { OrderController } from './order.controller'

const router = express.Router()

router.post('/orders', OrderController.createOrder)
router.get('/orders', OrderController.getOrders)
router.get('/orders', OrderController.getOrdersByUserEmail)

export const OrderRoutes = router
