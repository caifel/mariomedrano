import Link from 'next/link';
import { Form } from './Form';
import CloseSvg from './img/close.svg';

const IndexPage = async () => {
  return (
    <>
      <main className="bg-zinc-900 h-full min-h-screen pt-10 pb-20 relative">
        <h1 className="select-none mb-10 ml-10 mr-5 font-semibold relative">
          <span>{'New story'}</span>
          <Link href="zukkos/admin/list" className="outline-none absolute right-0 top-2 group">
            <CloseSvg className="group-focus:text-white/80 w-10 h-10 text-white/50" />
          </Link>
        </h1>

        <Form />
      </main>
    </>
  );
};

export default IndexPage;
