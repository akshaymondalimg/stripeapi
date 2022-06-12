import mongoose from 'mongoose';
import chalk from 'chalk';

import { constant } from '../config/index.js'

export default async () => {
    try {
        const uri = `${constant.credentials.MONGO_URI}${constant.credentials.MONGO_DB_NAME}`;
        const conn = await mongoose.connect(uri);
        console.log(chalk.blue(`Database connected on mongodb://${conn.connection.host}:${conn.connection.port} ✅`));
    } catch (error) {
        console.log(chalk.red('Database not connected...❌'));
    }
}