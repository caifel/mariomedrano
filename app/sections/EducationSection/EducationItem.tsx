import { FC } from 'react';
import styles from './EducationItem.module.scss';

type TProps = {
  data: TEducation;
};

export const EducationItem: FC<TProps> = ({ data: { year, name, school, type } }) => {
  return (
    <div key={name} className={styles.root}>
      <div className={styles.year}>
        <span className="fs-12 fw-100">{year}</span>
      </div>
      <div className={styles.content}>
        <h3 className="c-primary fs-12">{type}</h3>
        <p className="fs-12 mt-5">
          <b>{name}</b>
        </p>
        <p>
          {/* this can be a text or a text mix */}
          <span className="c-muted fs-12 fw-100">{school}</span>
        </p>
      </div>
    </div>
  );
};
