import { MongoClient, ObjectId } from 'mongodb';
import Link from 'next/link';
import { Form } from '../../create/Form';
import CloseSvg from '../../create/img/close.svg';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.msvoy6e.mongodb.net/?retryWrites=true&w=majority`;
const clientPromise = MongoClient.connect(uri);

export const revalidate = 3600; // revalidate every hour

const getData = async (id: string) => {
  const client = await clientPromise;
  const db = client.db('main');
  const collection = db.collection('zukko');
  // Sorting by _id is same as sorting by date
  const data = await collection.findOne({ _id: new ObjectId(id) });

  return data;
};

const getUrl = (id: string, size: 4 | 500) => {
  const key = `${id}x${size}.webp`;
  return `${process.env.S3_HOST}/${key}`;
};

const IndexPage = async ({ params }: any) => {
  const data = await getData(params.id);

  // console.log(data, 'data');

  return (
    <>
      <main className="bg-zinc-900 h-full min-h-screen pt-10 pb-20 relative">
        <h1 className="select-none mb-10 ml-10 mr-5 font-semibold relative">
          <span>{'Edit story'}</span>
          <Link href="zukkos/admin/list" className="outline-none absolute right-0 top-2 group">
            <CloseSvg className="group-focus:text-white/80 w-10 h-10 text-white/50" />
          </Link>
        </h1>
        <Form title={data?.title} imgUrl={getUrl(params.id, 500)} />
      </main>
    </>
  );
};

export default IndexPage;
