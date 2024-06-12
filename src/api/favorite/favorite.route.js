import express from 'express';
import {
  addFavoriteController,
  removeFavoriteController,
  getUserFavoritesController,
} from './favorite.controler';

const favoriteRouter = express.Router();

favoriteRouter.post('/', addFavoriteController);
favoriteRouter.delete('/:productId', removeFavoriteController);
favoriteRouter.get('/', getUserFavoritesController);

export default favoriteRouter;
