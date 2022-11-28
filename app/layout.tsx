import { Roboto } from '@next/font/google';
import { FC } from 'react';
import '../styles/index.scss';
import { personalInfo } from './data';
import HandByeIcon from './images/hand-bye.svg';
import styles from './layout.module.scss';
import { t } from './locales/en/all';
const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin']
});

const Header: FC = () => {
  return (
    <header className="bg-section p-20">
      <h1 className="c-primary fs-32 fs-md-40 fw-400">{personalInfo.name}</h1>
      <div className="mt-10 mt-md-0">
        <p className="fs-16 fs-md-24">{personalInfo.role}</p>
        <p className="mt-10">
          <a className="c-link fs-14" href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </a>
        </p>
        <p className="mt-10">
          <a className="c-link fs-14" href={`tel:${personalInfo.phone.split(' ').join('')}`}>
            {personalInfo.phone}
          </a>
        </p>
      </div>
    </header>
  );
};

const Footer: FC = () => {
  return (
    <footer className="bg-section p-20 mt-1 mt-md-0">
      <p>
        <span>{t.footer.part1}</span>
      </p>
      <p className="mt-10 mt-md-0">
        <b className="c-primary">{t.footer.part2}</b>
      </p>
      <p className="mt-10 mt-md-0 align-items-center">
        <span className="fw-100">{t.footer.part3}</span>
        <HandByeIcon className="ml-10 c-primary" />
      </p>
    </footer>
  );
};

const RootLayout: FC<any> = ({ children }) => {
  return (
    <html className={roboto.className} lang="en" data-theme="dark">
      <head />
      <body className={styles.root}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
