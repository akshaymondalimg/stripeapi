import { userModel } from '../models/index.js';
import bcrypt from 'bcrypt';

/**
 * @function addUser 
 * @description Add user function
 * @param (req)
 * @author [Akshay Mondal]
 */
export const addUser = async (req) => {
    try {
        const { firstName, lastName, email, mobile, password, confirmPassword } = req.body;
        if (password === confirmPassword) {
            const findUserByEmail = await userModel.findOne({ email });
            const findUserByMobile = await userModel.findOne({ mobile });
            if (findUserByEmail && findUserByEmail !== {}) {
                return {
                    status: false,
                    message: 'Email already exist!',
                    data: {}
                }
            }
            if (findUserByMobile && findUserByMobile !== {}) {
                return {
                    status: false,
                    message: 'Mobile already exist!',
                    data: {}
                }
            }
            const salt = await bcrypt.genSalt(12);
            const hashPassword = await bcrypt.hash(password, salt);
            const insertUser = new userModel({
                first_name: firstName,
                last_name: lastName,
                email,
                mobile,
                password: hashPassword
            });
            const saveUser = await insertUser.save();
            if (saveUser && saveUser !== {}) {
                return {
                    status: true,
                    message: 'User added successfully!',
                    data: saveUser
                }
            }
        } else {
            return {
                status: false,
                message: 'Please confirm your password!',
                data: {}
            }
        }
    } catch (error) {
        throw error;
    }
}