import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export const credentials = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8080,
    LOCAL_HOST: process.env.LOCAL_HOST || '127.0.0.1',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/',
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'stripe',
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
}

export const ststusCode = {
    NOT_FOUND: 404,
    OK: 200,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400
}