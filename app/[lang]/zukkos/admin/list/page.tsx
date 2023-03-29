import { MongoClient } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import DotsVerticalSvg from './img/dots-vertical.svg';
import styles from './styles.module.scss';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.msvoy6e.mongodb.net/?retryWrites=true&w=majority`;
const clientPromise = MongoClient.connect(uri);

export const revalidate = 3600; // revalidate every hour

const getData = async () => {
  const client = await clientPromise;
  const db = client.db('main');
  const collection = db.collection('zukko');
  // Sorting by _id is same as sorting by date
  const data = await collection.find().limit(5).sort({ _id: -1 }).toArray();

  return data;
};

const getUrl = (id: string, size: 4 | 500) => {
  const key = `${id}x${size}.webp`;
  return `${process.env.S3_HOST}/${key}`;
};

const IndexPage = async () => {
  const data = await getData();

  return (
    <>
      <main className="bg-zinc-900 h-full min-h-screen pt-10 pb-20 relative">
        <h1 className="select-none mb-10 ml-10 mr-5 font-semibold relative">
          <span>{'<Add header>'}</span>
        </h1>
        {data.map((zukko, index) => (
          <div key={String(zukko._id)} className="w-full">
            <Link className={styles.linkImageContainer} href={`zukkos/admin/edit/${String(zukko._id)}`}>
              <Image
                className="aspect-video"
                alt="Picture of the story"
                width={1600}
                height={900}
                placeholder="blur"
                src={getUrl(String(zukko._id), 500)}
                blurDataURL={getUrl(String(zukko._id), 4)}
                unoptimized
                priority={index < 3}
              />
            </Link>

            <div className="flex items-start pl-5 py-5 relative">
              <Image
                className="rounded-full flex-shrink-0"
                alt="Picture of the author"
                width={40}
                height={40}
                src="/images/wolf.webp"
                unoptimized
              />
              <div className="ml-6 pr-10 flex-1">
                <Link href={`zukkos/admin/edit/${String(zukko._id)}`}>
                  <h2 className="text-xl font-semibold">{zukko.title}</h2>
                </Link>
                <p className="mt-3">{'5 chapters, modality of the game'}</p>
              </div>

              <button className="absolute top-5 right-2">
                <DotsVerticalSvg className="text-gray-500 w-10" />
              </button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default IndexPage;
