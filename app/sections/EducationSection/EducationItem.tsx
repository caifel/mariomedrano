import cns from 'classnames';
import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: TEducation;
}

export const EducationItem: FC<IProps> = ({ className, data: { active, name, school, type } }) => {
  return (
    <article className={cns(className, 'flex items-center')}>
      <div
        className={cns('w-14 h-14', 'flex items-center justify-center shrink-0', {
          'bg-zinc-300 dark:bg-zinc-500': !active,
          'bg-red-400 dark:bg-yellow-300/50': active
        })}
      >
        <span className="text-3xl">{name[0]}</span>
      </div>
      <div className="ml-8">
        <h3 className="text-red-500 dark:text-yellow-400">{name}</h3>
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
