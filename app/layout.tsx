import { Roboto } from '@next/font/google';
import { FC } from 'react';
import '../styles/index.scss';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin']
});

const RootLayout: FC<any> = ({ children }) => {
  return (
    <html className={roboto.className} lang="en" data-theme="dark">
      <head />
      <body className="bg-black/90 dark:bg-black/80 transition-colors">
        <div className="max-w-xl my-0 mx-auto">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
