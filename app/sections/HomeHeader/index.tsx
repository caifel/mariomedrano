import cns from 'classnames';
import { FC } from 'react';
import { personalInfo } from '../../data';
import { t } from '../../locales/en/all';
import styles from './styles.module.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeHeader: FC<IProps> = ({ className }) => {
  return (
    <header className={cns(styles.custom, className)}>
      <h1>{personalInfo.name}</h1>
      <p className={styles.roleText}>{personalInfo.role}</p>
      <p>
        <a className="link" href={`mailto:${personalInfo.email}`}>
          {t.common.getInTouch}
        </a>
      </p>
    </header>
  );
};
