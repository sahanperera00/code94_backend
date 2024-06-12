import {
  addFavorite,
  removeFavorite,
  getUserFavorites,
} from './favorite.service';

export async function addFavoriteController(req, res) {
  const { userId, productId } = req.body;
  try {
    const favorite = await addFavorite(userId, productId);
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function removeFavoriteController(req, res) {
  const { userId } = req.user;
  const { productId } = req.params;
  try {
    await removeFavorite(userId, productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserFavoritesController(req, res) {
  const { userId } = req.body;
  try {
    const favorites = await getUserFavorites(userId);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
