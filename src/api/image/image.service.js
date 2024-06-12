import fs from 'fs/promises';
import path from 'path';

export const uploadImageService = async (files) => {
  const uploadedImageUrls = files.map((file) => `/uploads/${file.filename}`);
  return uploadedImageUrls;
};

export const deleteImageService = async (imageUrl) => {
  try {
    const imagePath = path.join(
      process.cwd(),
      'uploads',
      imageUrl.replace('/uploads/', ''),
    );
    await fs.unlink(imagePath);
  } catch (error) {
    console.error('Error deleting image:', error);
    throw new Error('Failed to delete image');
  }
};
