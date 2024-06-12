import { uploadImageService, deleteImageService } from './image.service';

export const uploadImages = async (req, res) => {
  try {
    const uploadedImageUrls = await uploadImageService(req.files);
    res.json({ imageUrls: uploadedImageUrls });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Failed to upload images' });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const imageUrl = decodeURIComponent(req.params.imageUrl);
    await deleteImageService(imageUrl);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
};
