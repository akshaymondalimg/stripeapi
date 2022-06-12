/**
 * @function addProduct 
 * @description Add product function
 * @method POST
 * @param (req, res, next)
 * @author [Akshay Mondal]
 */
export const addProduct = (req, res, next) => {
    try {
        res.json({ message: 'Add Product!' });
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
export const getProduct = (req, res, next) => {
    try {
        res.json({ message: 'Get all Product!' });
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
export const getSingleProduct = (req, res, next) => {
    try {
        res.json({ message: 'Get single Product!' });
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
export const updateProduct = (req, res, next) => {
    try {
        res.json({ message: 'Update Product!' });
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
export const deleteProduct = (req, res, next) => {
    try {
        res.json({ message: 'Delete Product!' });
    } catch (error) {
        throw error;
    }
}