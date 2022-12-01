import { Roboto } from '@next/font/google';
import { FC } from 'react';
import '../styles/index.scss';
import { personalInfo } from './data';
import HandByeIcon from './images/hand-bye.svg';
import styles from './layout.module.scss';
import { t } from './locales/en/all';
const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin']
});

const Header: FC = () => {
  return (
    <header className="card">
      <h1 className="c-primary">{personalInfo.name}</h1>
      <div className="mt-10">
        <p className="h3">{personalInfo.role}</p>
        <p className="mt-10">
          <a className="c-link" href={`mailto:${personalInfo.email}`}>
            {t.common.getInTouch}
          </a>
        </p>
      </div>
    </header>
  );
};

const Footer: FC = () => {
  return (
    <footer className="card h3 mt-1">
      <p>
        <span>{t.footer.part1}</span>
      </p>
      <p className="mt-10">
        <b className="c-primary">{t.footer.part2}</b>
      </p>
      <p className="mt-10 align-items-center">
        <span>{t.footer.part3}</span>
        <HandByeIcon className="ml-10 c-primary" />
      </p>
    </footer>
  );
};

const RootLayout: FC<any> = ({ children }) => {
  return (
    <html className={roboto.className} lang="en" data-theme="light">
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
