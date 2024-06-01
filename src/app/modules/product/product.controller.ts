import { Request, Response } from 'express'
import { ProductServices } from './product.service'

const createProduct = async (req: Request, res: Response) => {
    try {
        const { product } = req.body
        const result = await ProductServices.createProductIntoDB(product)

        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
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

const getProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getProductsFromDB()

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
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

const getAProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const result = await ProductServices.getAProductFromDB(productId)

        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
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

const updateAProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const productData = req.body.product

        const result = await ProductServices.updateAProductFromDB(
            productId,
            productData
        )

        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
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

const deleteAProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params

        const result = await ProductServices.deleteAProductFromDB(productId)

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
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


export const ProductController = {
    createProduct,
    getProducts,
    getAProduct,
    updateAProduct,
    deleteAProduct,
}
