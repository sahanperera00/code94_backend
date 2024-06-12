import express from 'express';
import multer from 'multer';
import path from 'path';
import { uploadImages, deleteImage } from './image.controller.js';
import { v4 as uuidv4 } from 'uuid';

const imageRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + uuidv4();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

imageRouter.post('/upload', upload.array('images'), uploadImages);
imageRouter.delete('/upload/:imageUrl', deleteImage);

export default imageRouter;
