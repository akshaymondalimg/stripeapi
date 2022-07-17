import { userService } from '../services/index.js';
import { response } from '../helpers/index.js';

/**
 * @function addUser 
 * @description Add user function
 * @method POST
 * @param (req, res, next)
 * @author [Akshay Mondal]
 */
export const addUser = async (req, res, next) => {
    try {
        const addUser = await userService.addUser(req);
        if (addUser.status === true) {
            await response.successResponse(res, addUser.data, addUser.message)
        } else {
            await response.errorResponse(res, addUser.data, addUser.message)
        }
    } catch (error) {
        throw error;
    }
}