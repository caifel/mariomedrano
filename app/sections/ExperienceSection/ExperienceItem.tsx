import { FC } from 'react';
import { t } from '../../locales/en/all';
import styles from './ExperienceItem.module.scss';

type TProps = {
  data: TWorkingExperience;
};

export const ExperienceItem: FC<TProps> = ({ data: { year, company, industry, role } }) => {
  return (
    <div key={company} className={styles.root}>
      <div className={styles.year}>
        <span className="fs-12 fw-100">{year}</span>
      </div>
      <div className={styles.content}>
        <h3 className="fs-12 fs-600">{company}</h3>
        <p className="text-mix mt-5">
          <span className="fs-12 fw-100">{industry}</span>
          <span className="c-primary fs-12">{t.section.workingExperience.as}</span>
          <span className="c-muted fs-12">{role}</span>
        </p>
      </div>
    </div>
  );
};
