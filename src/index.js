import express from 'express';
import 'dotenv/config';
import authMiddleware from './middleware/authMiddleware';
import authRouter from './api/auth/auth.router';
import productRouter from './api/product/product.router';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/auth', authRouter);
app.use(authMiddleware);

app.use('/api/product', productRouter);

app.listen(PORT, () => console.log('Server Started'));
