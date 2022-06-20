import { productModel } from '../models/index.js'

/**
 * @function addProduct 
 * @description Add product function
 * @param (req)
 * @author [Akshay Mondal]
 */
export const addProduct = async (req) => {
    try {
        const { product, price } = req.body;
        const productData = new productModel({
            product, price
        });
        const saveProduct = await productData.save();
        if (saveProduct && saveProduct !== {}) {
            return {
                status: true,
                message: 'product added successfully!',
                data: saveProduct
            }
        } else {
            return {
                status: false,
                message: 'product did not added successfully!',
                data: {}
            }
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function getAllProduct 
 * @description Get all product function
 * @param (req)
 * @author [Akshay Mondal]
 */
export const getAllProduct = async (req) => {
    try {
        const productData = await productModel.find();
        if (productData && Array.isArray(productData) && productData.length > 0) {
            return {
                status: true,
                message: 'Get all products!',
                data: productData
            }
        } else {
            return {
                status: false,
                message: 'No product found!',
                data: []
            }
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function getSingleProduct 
 * @description Get single product function
 * @param (req)
 * @author [Akshay Mondal]
 */
export const getSingleProduct = async (req) => {
    try {
        const productData = await productModel.find({ _id: req.params.id });
        if (productData && Array.isArray(productData) && productData.length > 0) {
            return {
                status: true,
                message: 'Get single products!',
                data: productData
            }
        } else {
            return {
                status: false,
                message: 'No product found!',
                data: []
            }
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function updateProduct 
 * @description Update product function
 * @param (req)
 * @author [Akshay Mondal]
 */
export const updateProduct = async (req) => {
    try {
        const productData = await productModel.updateOne({ _id: req.params.id }, req.body, { new: true });
        if (productData && productData.modifiedCount > 0) {
            return {
                status: true,
                message: 'Update product details!',
                data: { _id: req.params.id }
            }
        } else {
            return {
                status: false,
                message: 'Did not update product details!',
                data: {}
            }
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function deleteProduct 
 * @description Delete product function
 * @param (req)
 * @author [Akshay Mondal]
 */
export const deleteProduct = async (req) => {
    try {
        const productData = await productModel.deleteOne({ _id: req.params.id });
        if (productData && productData.deletedCount > 0) {
            return {
                status: true,
                message: 'Delete product successfully!',
                data: { _id: req.params.id }
            }
        } else {
            return {
                status: false,
                message: 'Did not delete product details!',
                data: {}
            }
        }
    } catch (error) {
        throw error;
    }
}