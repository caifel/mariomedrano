import cns from 'classnames';
import { FC } from 'react';
import { Space } from '../../ui/Space';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TWorkingExperience;
}

export const ExperienceItem: FC<IProps> = ({ className, data: { year, company, industry, role, current, url } }) => {
  return (
    <div className={cns(className, 'align-items-center')}>
      <div
        className={cns('letter-logo', {
          'bg-muted': !current,
          'bg-primary-50': current
        })}
      >
        <span className="h2">{company[0]}</span>
        {/* year */}
      </div>
      <div className="ml-30">
        <h3 className="c-primary">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <p className="mt-5">
          <b>{industry}</b>
        </p>
        <p className="mt-5">
          <span>{role}</span>
        </p>
      </div>
    </div>
  );
};
