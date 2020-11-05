import express from 'express';
// import cors from 'cors';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';

import connectDatabase from './config/db.js';

const app = express();

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     allowedHeaders: ['Content-Type'],
//   })
// );

connectDatabase();

const server = app.listen(
  PORT,
  console.log(
    `This server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  )
);
