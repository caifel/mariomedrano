import Image from 'next/image';
import Link from 'next/link';
import cns from 'classnames';
import { getImageUrl } from '../../utils/getImageUrl';
import DotsVerticalSvg from './img/dots-vertical.svg';
import PlusSvg from './img/plus.svg';
import styles from './styles.module.scss';

type Story = {
  id: string;
  title: string;
  image: string;
};

const getList = async () => {
  // const response = await fetch('http://localhost:3000/en/zukkos/admin/list/api');
  const HOST =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://caifel.com';
  const response = await fetch(`${HOST}/api/zukkos/list`, {
    cache: 'no-store',
  });
  const { list = [] } = await response.json();

  return list.map(({ _id, title }: any) => ({
    id: String(_id),
    title,
    image: getImageUrl(String(_id), 500),
  })) as Story[];
};

const Header = () => {
  return (
    <div className="flex items-center px-5">
      <div className="w-2 h-2 bg-orange-500" />
      <div className="w-3 h-3 bg-orange-400 ml-1" />
      <div className="w-2 h-2 bg-orange-300 ml-1" />

      <h1 className="ml-2 select-none font-semibold text-xl tracking-tighter">
        {'Zukkos'}
      </h1>

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
  );
};
const Body = async () => {
  const data = await getList();

  return (
    <>
      {data.map(({ id, title, image }, index) => (
        <div key={id} className="w-full mt-5">
          <Link
            className={cns(styles.linkImageContainer, 'relative')}
            href={`zukkos/admin/edit/${id}`}
          >
            <Image
              className="aspect-video active:opacity-80 opacity-100 transition-opacity duration-300"
              alt="Picture of the story"
              width={1600}
              height={900}
              placeholder="blur"
              src={image}
              blurDataURL={
                'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcufOEMQAG3AJv8A9RJQAAAABJRU5ErkJggg=='
              }
              unoptimized
              priority={index < 3}
            />
            <span className="absolute bottom-2 right-2 bg-black text-white rounded-md select-none cursor-pointer text- text-xs px-2 py-1.5">
              {'0 / 0'}
            </span>
          </Link>

          <div className="flex items-start pl-2 mt-4 pb-2 relative">
            <Image
              className="rounded-full flex-shrink-0"
              alt="Picture of the author"
              width={35}
              height={35}
              src="/images/wolf.webp"
              unoptimized
            />
            <div className="ml-6 pr-10 flex-1">
              <Link href={`zukkos/admin/edit/${id}`}>
                <h2 className="text-xl font-semibold">{title}</h2>
              </Link>
              <p className="mt-1">
                <a className="underline cursor-default">{'Wolves'}</a>
                <span>{' - decision maker | random'}</span>
              </p>
            </div>

            <button className="absolute top-3 right-2">
              <DotsVerticalSvg className="text-gray-400 w-8" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
const Footer = () => {
  return (
    <div className="flex justify-center items-center max-w-xl mx-auto fixed bottom-0 left-0 right-0 h-16 bg-zinc-900 border-t border-t-zinc-700 ">
      <Link href="zukkos/admin/create">
        <PlusSvg className="text-gray-200 w-9 border border-gray-200 p-1.5 rounded-full" />
      </Link>
    </div>
  );
};

const IndexPage = () => {
  return (
    <>
      <Header />
      {/* @ts-expect-error Async Server Component */}
      <Body />
      <Footer />
    </>
  );
};

export default IndexPage;
