import cns from 'classnames';
import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: TEducation;
}

export const EducationItem: FC<IProps> = ({ className, data: { year, name, school, type } }) => {
  return (
    <article className={cns(className, 'align-items-center')}>
      <div
        className={cns('letter-logo', {
          'bg-muted': true
          // 'bg-primary-50': current
        })}
      >
        <span className="h2">{name[0]}</span>
        {/* year */}
      </div>
      <div className="ml-30 lh-2">
        <h3 className="c-primary">{type}</h3>
        <p>
          <b>{name}</b>
        </p>
        <p>
          <span>{school}</span>
        </p>
      </div>
    </article>
  );
};
