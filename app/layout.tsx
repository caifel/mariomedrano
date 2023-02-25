import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { FC } from 'react';
import '../styles/index.scss';
import { personalInfo } from './data';

export const metadata: Metadata = {
  title: `${personalInfo.name} (${personalInfo.alias})`,
  description: personalInfo.description,
  keywords: personalInfo.keywords.join(','),
  icons: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      url: '/favicon.ico'
    }
  ],
  creator: personalInfo.name,
  publisher: personalInfo.name
  // structuredData
  // canonical
  // robots
};

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin']
});

const RootLayout: FC<any> = ({ children }) => {
  return (
    <html className={roboto.className} lang="en" data-theme="dark">
      <body className="bg-black/90 dark:bg-black/80 transition-colors">
        <div className="max-w-xl my-0 mx-auto">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
