import { productService } from '../services/index.js';
import { response } from '../helpers/index.js';

/**
 * @function addProduct 
 * @description Add product function
 * @method POST
 * @param (req, res, next)
 * @author [Akshay Mondal]
 */
export const addProduct = async (req, res, next) => {
    try {
        const addProduct = await productService.addProduct(req);
        if (addProduct.status === true) {
            await response.successResponse(res, addProduct.data, addProduct.message)
        } else {
            await response.errorResponse(res, addProduct.data, addProduct.message)
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function getProduct 
 * @description function for get all product
 * @method GET
 * @param (req, res, next)
 * @author [Akshay Mondal]
 */
export const getProduct = async (req, res, next) => {
    try {
        const getProduct = await productService.getAllProduct(req)
        if (getProduct.status === true) {
            await response.successResponse(res, getProduct.data, getProduct.message)
        } else {
            await response.errorResponse(res, getProduct.data, getProduct.message)
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function getSingleProduct 
 * @description function for get single product
 * @method GET
 * @param (req, res, next)
 * @author [Akshay Mondal]
 */
export const getSingleProduct = async (req, res, next) => {
    try {
        const getProduct = await productService.getSingleProduct(req)
        if (getProduct.status === true) {
            await response.successResponse(res, getProduct.data, getProduct.message)
        } else {
            await response.errorResponse(res, getProduct.data, getProduct.message)
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function updateProduct 
 * @description function for update product
 * @method PUT
 * @param (req, res, next)
 * @author [Akshay Mondal]
 */
export const updateProduct = async (req, res, next) => {
    try {
        const updateProduct = await productService.updateProduct(req)
        if (updateProduct.status === true) {
            await response.successResponse(res, updateProduct.data, updateProduct.message)
        } else {
            await response.errorResponse(res, updateProduct.data, updateProduct.message)
        }
    } catch (error) {
        throw error;
    }
}

/**
 * @function deleteProduct 
 * @description function for delete product
 * @method DELETE
 * @param (req, res, next)
 * @author [Akshay Mondal]
 */
export const deleteProduct = async (req, res, next) => {
    try {
        const deleteProduct = await productService.deleteProduct(req);
        if (deleteProduct.status === true) {
            await response.successResponse(res, deleteProduct.data, deleteProduct.message)
        } else {
            await response.errorResponse(res, deleteProduct.data, deleteProduct.message)
        }
    } catch (error) {
        throw error;
    }
}