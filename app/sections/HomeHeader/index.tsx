import cns from 'classnames';
import { FC } from 'react';
import { personalInfo } from '../../data';
import { t } from '../../locales/en/all';
import styles from './styles.module.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeHeader: FC<IProps> = ({ className }) => {
  return (
    <header className={cns(styles.custom, className)}>
      <code>{'@ C a i f e l'}</code>
      <h1>{personalInfo.name}</h1>
      <p className={cns(styles.roleText, 'mt-40')}>{personalInfo.role}</p>
      <p className=" mt-10">
        <a className="link" href={`mailto:${personalInfo.email}`}>
          {t.common.getInTouch}
        </a>
      </p>
    </header>
  );
};
