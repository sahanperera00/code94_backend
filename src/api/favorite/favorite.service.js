const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function addFavorite(userId, productId) {
  const favorite = await prisma.favoriteProduct.create({
    data: {
      user: { connect: { id: userId } },
      product: { connect: { id: productId } },
    },
  });
  return favorite;
}

export async function removeFavorite(userId, productId) {
  const deletedFavorite = await prisma.favoriteProduct.deleteMany({
    where: {
      userId,
      productId,
    },
  });
  return deletedFavorite;
}

export async function getUserFavorites(userId) {
  const favorites = await prisma.favoriteProduct.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });
  return favorites;
}
