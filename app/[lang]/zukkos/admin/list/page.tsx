import { MongoClient } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import DotsVerticalSvg from './img/dots-vertical.svg';
import PlusSvg from './img/plus.svg';
import styles from './styles.module.scss';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.msvoy6e.mongodb.net/?retryWrites=true&w=majority`;
const clientPromise = MongoClient.connect(uri);

// export const revalidate = 3600; // revalidate every hour

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
      <main className="bg-zinc-900 h-full min-h-screen pt-5 pb-20 relative">
        <div className="flex items-center px-5">
          <div className="w-2 h-2 bg-orange-500" />
          <div className="w-3 h-3 bg-orange-400 ml-1" />
          <div className="w-2 h-2 bg-orange-300 ml-1" />
          <h1 className="ml-2 select-none font-semibold text-xl tracking-tighter">{'Zukkos'}</h1>
          <Image
            className="rounded-full flex-shrink-0 ml-auto"
            alt="Picture of the author"
            width={24}
            height={24}
            src="/images/wolf.webp"
            unoptimized
            priority
          />
        </div>
        {data.map((zukko, index) => (
          <div key={String(zukko._id)} className="w-full mt-5">
            <Link className={styles.linkImageContainer} href={`zukkos/admin/edit/${String(zukko._id)}`}>
              <Image
                className="aspect-video active:opacity-80 opacity-100 transition-opacity duration-300"
                alt="Picture of the story"
                width={1600}
                height={900}
                placeholder="blur"
                src={getUrl(String(zukko._id), 500)}
                blurDataURL={
                  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcufOEMQAG3AJv8A9RJQAAAABJRU5ErkJggg=='
                }
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
        <div className="flex justify-center max-w-xl mx-auto fixed bottom-0 left-0 right-0 py-5 bg-black">
          <Link href="zukkos/admin/create">
            <PlusSvg className="text-gray-200 w-9 border border-gray-200 p-1.5 rounded-full" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
