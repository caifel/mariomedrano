import Link from 'next/link';
import HeaderBackIcon from '../images/header-back.svg';

const Page = () => {
  return (
    <main>
      <header className="header-container">
        <Link href="/">
          <HeaderBackIcon className="left-icon c-primary" />
        </Link>
        <h1>What and how?</h1>
      </header>
      <section className="card mt-10"></section>
      <section className="card mt-1">
        <h2 className="h3">What is this?</h2>
      </section>
      <section className="card mt-1">
        <h2 className="h3">What is this?</h2>
      </section>
    </main>
  );
};

export default Page;
