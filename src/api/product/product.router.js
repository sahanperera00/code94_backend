import express from 'express';
import {
  createProductController,
  deleteProductController,
  getProductController,
  getProductsController,
  updateProductController,
} from './product.controller.js';

const productRouter = express.Router();

productRouter.post('/', createProductController);
productRouter.get('/', getProductController);
productRouter.get('/all', getProductsController);
productRouter.put('/', updateProductController);
productRouter.delete('/', deleteProductController);

export default productRouter;
