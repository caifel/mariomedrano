import cns from 'classnames';
import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: TWorkingExperience;
}

export const ExperienceItem: FC<IProps> = ({
  className,
  data: { displayTimePeriod, company, industry, role, current, url }
}) => {
  return (
    <article className={cns(className, 'align-items-center')}>
      <div
        className={cns('letter-logo', {
          'bg-muted': !current,
          'bg-primary-90': current
        })}
      >
        <span className="h2">{company[0]}</span>
      </div>
      <div className="ml-30 lh-2">
        <h3 className="c-primary">
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
