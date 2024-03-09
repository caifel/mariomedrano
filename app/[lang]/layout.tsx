import { Roboto } from 'next/font/google';
import { i18nConfig, Locale } from '@modules/i18n/config';
import { i18n } from '@modules/i18n/i18n';
import '../../styles/index.scss';
import { personalInfo } from './data';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.alias}`,
  description: personalInfo.description,
  keywords: personalInfo.keywords.join(','),
  icons: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      url: '/favicon.ico',
    },
  ],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: 'https://caifel.com',
    languages: {
      'en-US': 'https://caifel.com/en',
      'es-ES': 'https://caifel.com/es',
      'de-DE': 'https://caifel.com/de',
    },
  },
};

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

type Props = { children: React.ReactNode; params: { lang: Locale } };

export default function Root({ children, params }: Props) {
  i18n.setLocale(params.lang);

  return (
    <html className={roboto.className} lang={params.lang} data-theme="dark">
      <body className="bg-black/90 dark:bg-black/80 transition-colors">
        <div className="max-w-xl my-0 mx-auto">{children}</div>
      </body>
    </html>
  );
}
