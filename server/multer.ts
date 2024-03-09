import multer from 'multer';

const upload = multer({
  // storage: multerS3({
  //   s3: s3 as unknown as S3, // Cast the v3 S3 client to the required type
  //   bucket: 'zukkos',
  //   key: function (req, file, cb) {
  //     cb(null, Date.now().toString() + '-' + file.originalname);
  //   }
  //   // acl: 'public-read' // Set your desired ACL settings here
  // }),
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // In bytes: 5 MB
});

export default upload;
