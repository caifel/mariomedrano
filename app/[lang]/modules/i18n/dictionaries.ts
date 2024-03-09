import 'server-only';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types

export const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
};
