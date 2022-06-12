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
        if (saveProduct) {
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