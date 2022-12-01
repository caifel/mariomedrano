import cns from 'classnames';
import { FC } from 'react';
import { personalInfo } from '../data';
import { t } from '../locales/en/all';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeHeader: FC<IProps> = ({ className }) => {
  return (
    <header className={cns(className, 'lh-2')}>
      <h1 className="c-primary">{personalInfo.name}</h1>
      <p className="h3">{personalInfo.role}</p>
      <p>
        <a className="link" href={`mailto:${personalInfo.email}`}>
          {t.common.getInTouch}
        </a>
      </p>
    </header>
  );
};
