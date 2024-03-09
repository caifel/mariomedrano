import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
  },
  region: process.env.S3_REGION,
});

export const uploadToS3 = async (
  buffer: Buffer,
  key: string,
  type = 'image/webp',
) => {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: type,
    ACL: 'public-read', // Adjust ACL settings as needed
  };

  try {
    await s3.send(new PutObjectCommand(params));
  } catch (err) {
    throw err;
  }
};
