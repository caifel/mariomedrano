import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18nConfig } from '@modules/i18n/config';
import getLocale from '@modules/i18n/getLocale';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/images',
      '/sitemap.xml',
      '/robots.txt',
      // '/manifest.json',
      // '/favicon.ico',
      // Your other files in `public`
    ].findIndex((path) => pathname.includes(path)) !== -1
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18nConfig.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request.headers);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
