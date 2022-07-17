import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import cors from 'cors';

import { constant } from './src/config/index.js';
import connectDB from './src/database/db.js';
import routes from './src/routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

routes(app);

connectDB();
const port = constant.credentials.PORT || 8181
app.listen(port, () => console.log(chalk.blue(`Server up & run on http://${constant.credentials.LOCAL_HOST}:${port} ✅`)));