import cns from 'classnames';
import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: TEducation;
}

export const EducationItem: FC<IProps> = ({ className, data: { active, name, school, type } }) => {
  return (
    <article className={cns(className, 'align-items-center')}>
      <div
        className={cns('letter-logo', {
          'bg-muted': !active,
          'bg-primary-90': active
        })}
      >
        <span className="h2">{name[0]}</span>
      </div>
      <div className="ml-30 lh-2">
        <h3 className="c-primary">{name}</h3>
        <p>
          <b>{type}</b>
        </p>
        <p>
          <span>{school}</span>
        </p>
      </div>
    </article>
  );
};
