import { constant } from '../config/index.js'

export const successResponse = async (res, data, message, status = constant.ststusCode.OK) => {
    return res.status(status).json({
        success: true,
        status,
        message,
        data
    })
}

export const errorResponse = async (res, error, message, status = constant.ststusCode.NOT_FOUND) => {
    return res.status(status).json({
        success: false,
        status,
        message,
        error
    })
}