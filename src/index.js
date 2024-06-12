import express from 'express';
import 'dotenv/config';
import authMiddleware from './middleware/authMiddleware';
import authRouter from './api/auth/auth.router';
import productRouter from './api/product/product.router';
import userRouter from './api/user/user.router';
import imageRouter from './api/image/image.router';
import cors from 'cors';
import path from 'path';

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
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use(authMiddleware);
app.use('/api/product', productRouter);
app.use('/api/image', imageRouter);

app.listen(PORT, () => console.log('Server Started'));
