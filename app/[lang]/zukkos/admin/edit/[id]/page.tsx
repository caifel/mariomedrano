import Link from 'next/link';
import { MongoClient, ObjectId } from 'mongodb';
import { getImageUrl } from 'app/[lang]/zukkos/utils/getImageUrl';
import CloseSvg from '../../create/img/close.svg';
import { Form } from './Form';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.msvoy6e.mongodb.net/?retryWrites=true&w=majority`;
const clientPromise = MongoClient.connect(uri);

const getData = async (id: string) => {
  const client = await clientPromise;
  const db = client.db('main');
  const collection = db.collection('zukko');
  // Sorting by _id is same as sorting by date
  const data = await collection.findOne({ _id: new ObjectId(id) });

  return data;
};

const IndexPage = async ({ params }: any) => {
  const data = await getData(params.id);

  return (
    <>
      <main className="bg-zinc-900 h-full min-h-screen pt-10 pb-20 relative">
        <h1 className="select-none mb-10 ml-10 mr-5 font-semibold relative">
          <span>{'Edit story'}</span>
          <Link
            href="zukkos/admin/list"
            className="outline-none absolute right-0 top-2 group"
          >
            <CloseSvg className="group-focus:text-white/80 w-10 h-10 text-white/50" />
          </Link>
        </h1>

        <Form
          title={data?.title}
          imgUrl={getImageUrl(params.id, 500)}
          id={params.id}
        />
      </main>
    </>
  );
};

export default IndexPage;
