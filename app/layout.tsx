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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
