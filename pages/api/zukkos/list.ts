import nextConnect from 'next-connect';
import { getList } from 'app/[lang]/zukkos/lib/getList';

const handler = nextConnect();

handler.get(async (req: any, res: any) => {
  try {
    const list = await getList();

    return res.json({ list });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

export default handler;
