import nextConnect from 'next-connect';
import upload from 'server/multer';
import { uploadToS3 } from 'server/s3';
import sharp from 'sharp';

const handler = nextConnect();

// ASPECT RATIO JUST BE DIFINED IN UI

handler.use(upload.single('image'));

handler.post(async (req: any, res: any) => {
  const buffer = req.file?.buffer;
  const id = req.body.id;
  const left = Math.floor(Number(req.body.x));
  const top = Math.floor(Number(req.body.y));
  const width = Math.floor(Number(req.body.width));
  const height = Math.floor(Number(req.body.height));

  console.log(req.body, 'req.body');

  const urls: any = [];

  if (!id) return;

  try {
    for (const size of [1000, 500, 300, 100, 4]) {
      const key = `${id}x${size}.webp`;
      const url = `${process.env.S3_HOST}/${key}`;
      const image = await sharp(buffer).extract({ left, top, width, height }).resize(size).webp().toBuffer();

      await uploadToS3(image, key);
      urls.push(url);
    }

    return res.json({
      message: 'Image uploaded successfully',
      urls
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false
  }
};
