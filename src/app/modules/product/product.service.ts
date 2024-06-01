import { IProduct } from './product.interface'
import { ProductModel } from './product.model'

const createProductIntoDB = async (product: IProduct) => {
    const result = await ProductModel.create(product)
    return result
}

const getProductsFromDB = async () => {
    const result = await ProductModel.find()
    return result
}

const getAProductFromDB = async (productId: string) => {
    const result = await ProductModel.findOne({ _id: productId })
    return result
}

const updateAProductFromDB = async (productId: string, productData: any) => {
    const result = await ProductModel.findByIdAndUpdate(
        productId,
        productData,
        { new: true, runValidators: true }
    )
    return result
}

const deleteAProductFromDB = async (productId: string) => {
    const result = await ProductModel.deleteOne({ _id: productId })
    return result
}

export const ProductServices = {
    createProductIntoDB,
    getProductsFromDB,
    getAProductFromDB,
    updateAProductFromDB,
    deleteAProductFromDB,
}
