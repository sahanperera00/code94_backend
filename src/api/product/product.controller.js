import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from './product.service';

export async function createProductController(req, res, next) {
  try {
    const product = await createProduct(req.body);
    res.status(200).json({ data: product });
  } catch (error) {
    next(error);
  }
}

export async function getProductController(req, res, next) {
  try {
    const product = await getProduct(req.body.id);
    res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
}

export async function getProductsController(req, res, next) {
  try {
    const products = await getProducts();
    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
}

export async function updateProductController(req, res, next) {
  try {
    const updatedProduct = await updateProduct(req.body);
    res.status(200).json({
      message: 'Product updated successfully',
      product: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProductController(req, res, next) {
  try {
    const deletedProduct = await deleteProduct(req.body.id);
    res.status(200).json({
      message: 'Product deleted successfully',
      product: deletedProduct,
    });
  } catch (error) {
    next(error);
  }
}
