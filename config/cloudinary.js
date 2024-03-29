const cloudinary = require('cloudinary').v2; // methods to connect with cloudinary cloud
const multer = require('multer'); // methods to deal form-data requests
const { CloudinaryStorage } = require('multer-storage-cloudinary'); // methods to connect
//multer with cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'glocal-market',//can call it whatever you want in your project
    allowedFormats: ['jpg', 'png'],
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;