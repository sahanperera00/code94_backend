import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProduct(productData) {
  if (productData === null || productData === '') {
    throw new Error(
      'Unable to create product. Please provide valid product data',
    );
  }
  const product = await prisma.product.create({
    data: {
      name: productData.name,
      description: productData.description,
      sku: productData.sku,
      images: productData.images,
      quantity: productData.quantity,
      price: productData.price,
    },
  });
  return product;
}

export async function getProduct(productId) {
  if (productId === null || productId === '') {
    throw new Error(
      'Unable to retrieve product. Please provide a valid product id',
    );
  }
  const product = await prisma.product.findFirst({
    where: { id: productId },
  });
  if (product === null) {
    throw new Error('Product not found. Please provide a valid product id');
  }
  return product;
}

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export async function updateProduct(updateData) {
  if (updateData.id === null || updateData.id === '') {
    throw new Error(
      'Unable to update product. Please provide a valid product id',
    );
  }

  try {
    const updatedProduct = await prisma.product.update({
      where: { id: updateData.id },
      data: {
        name: updateData.name,
        description: updateData.description,
        sku: updateData.sku,
        images: updateData.images,
        quantity: updateData.quantity,
        price: updateData.price,
      },
    });

    return updatedProduct;
  } catch (error) {
    if (error.code === 'P2025') {
      throw new Error('Product not found. Please provide a valid product id');
    }
    throw error;
  }
}

export async function deleteProduct(productId) {
  if (productId === null || productId === '') {
    throw new Error(
      'Unable to delete product. Please provide a valid product id',
    );
  }

  try {
    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });

    return deletedProduct;
  } catch (error) {
    if (error.code === 'P2025') {
      throw new Error('Product not found. Please provide a valid product id');
    }
    throw error;
  }
}
