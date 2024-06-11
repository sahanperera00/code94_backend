import express from 'express';
import 'dotenv/config';
import authMiddleware from './middleware/authMiddleware';
import authRouter from './api/auth/auth.router';
import productRouter from './api/product/product.router';
import userRouter from './api/user/user.router';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use(authMiddleware);
app.use('/api/product', productRouter);

app.listen(PORT, () => console.log('Server Started'));
