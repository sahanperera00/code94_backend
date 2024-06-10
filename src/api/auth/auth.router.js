import express from 'express';
import AuthController from './auth.controller.js';

const authRouter = express.Router();

authRouter.post('/', AuthController.getToken);

export default authRouter;
