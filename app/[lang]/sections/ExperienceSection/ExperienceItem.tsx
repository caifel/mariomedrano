import { FC } from 'react';
import cns from 'classnames';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: TWorkingExperience;
}

export const ExperienceItem: FC<IProps> = ({
  className,
  data: { displayTimePeriod, company, industry, role, current, url },
}) => {
  return (
    <article className={cns(className, 'flex items-center')}>
      <div
        className={cns(
          'w-14 h-14',
          'flex items-center justify-center shrink-0',
          {
            'bg-zinc-300 dark:bg-zinc-500': !current,
            'bg-red-400 dark:bg-yellow-300/50': current,
          },
        )}
      >
        <span className="text-3xl">{company[0]}</span>
      </div>
      <div className="ml-8">
        <h3 className="text-red-500 dark:text-yellow-400">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <p>
          <span>{industry}</span>
        </p>
        <p>
          <b>{role}</b>
          <span>{` / ${displayTimePeriod}`}</span>
        </p>
      </div>
    </article>
  );
};
