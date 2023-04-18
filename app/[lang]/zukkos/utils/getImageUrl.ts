// import 'server-only';

export const getImageUrl = (id: string, size: 4 | 500) => {
  const key = `${id}x${size}.webp`;
  return `${process.env.S3_HOST}/${key}`;
};

