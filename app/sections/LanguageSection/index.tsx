import { FC } from 'react';
import { t } from '../../locales/en/all';
import GlobeIcon from '../../images/globe.svg';
import { LanguageItem } from './LanguageItem';
import cns from 'classnames';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  languageList: TLanguage[];
}

export const LanguageSection: FC<IProps> = ({ className, languageList }) => {
  return (
    <section className={cns(className)} id="language-section">
      <h2>
        <a className="align-items-center" href="#language-section">
          {t.section.languages.title}
          <GlobeIcon className="ml-10 c-primary" />
        </a>
      </h2>
      <div className="mt-30">
        {languageList.map((language, index) => (
          <LanguageItem className={index > 0 ? 'mt-30' : ''} key={language.name} data={language} />
        ))}
      </div>
    </section>
  );
};
