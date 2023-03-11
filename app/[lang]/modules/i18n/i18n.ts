import { Locale } from './config';
import { dictionaries } from './dictionaries';

class I18n {
  private dictionary: typeof import('./dictionaries/en.json') | undefined;

  constructor(public locale: Locale) {
    this.locale = locale;
  }

  getLocale() {
    return this.locale;
  }
  async setLocale(locale: Locale) {
    this.locale = locale;
    this.dictionary = await dictionaries[this.locale]();
  }
  getDictionary() {
    return this.dictionary!;
  }
}

export const i18n = new I18n('en');
