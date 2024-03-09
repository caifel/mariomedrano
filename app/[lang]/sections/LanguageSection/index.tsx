import { FC } from 'react';
import cns from 'classnames';
import GlobeIcon from '../../images/globe.svg';
import { t } from '../../locales/en/all';
import { LanguageItem } from './LanguageItem';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  languageList: TLanguage[];
}

export const LanguageSection: FC<IProps> = ({ className, languageList }) => {
  return (
    <section className={cns(className)} id="language-section">
      <h2>
        <a className="flex items-center" href="#language-section">
          {t.section.languages.title}
          <GlobeIcon className="ml-2.5 text-red-500 dark:text-yellow-400" />
        </a>
      </h2>
      <div className="mt-10">
        {languageList.map((language, index) => (
          <LanguageItem
            className={index > 0 ? 'mt-10' : ''}
            key={language.name}
            data={language}
          />
        ))}
      </div>
    </section>
  );
};
