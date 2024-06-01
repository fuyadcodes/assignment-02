import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

router.post('/cerate-product', ProductController.createProduct)
router.get('/', ProductController.getProducts)
router.get('/:productId', ProductController.getAProduct)
router.put('/:productId', ProductController.updateAProduct)
router.delete('/:productId', ProductController.deleteAProduct)

export const ProductRoutes = router
