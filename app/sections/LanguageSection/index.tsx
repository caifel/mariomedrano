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
    <section className={cns(className)}>
      <h2 className="fs-24">
        <span id="language" />
        <a className="align-items-center" href="#language">
          {t.section.languages.title}
          <GlobeIcon className="ml-10 c-primary" />
        </a>
      </h2>
      <div className="mt-30">
        {languageList.map((language, index) => (
          <LanguageItem className={index > 0 ? 'mt-20' : ''} key={language.name} data={language} />
        ))}
      </div>
    </section>
  );
};
