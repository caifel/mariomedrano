import cns from 'classnames';
import { FC } from 'react';
import { Space } from '../../ui/Space';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TWorkingExperience;
}

export const ExperienceItem: FC<IProps> = ({ className, data: { year, company, industry, role, current, url } }) => {
  return (
    <div key={company} className={cns(className, 'align-items-center')}>
      <div
        className={cns('letter-logo', {
          'bg-muted': !current,
          'bg-primary-50': current
        })}
      >
        <span className="fs-24">{company[0]}</span>
        {/* year */}
      </div>
      <div className="ml-30">
        <h3 className="c-primary fs-12">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        </h3>
        <p className="mt-5">
          <b className="fs-12">{industry}</b>
        </p>
        <p className="mt-5">
          <span className="c-muted fs-12 fw-300">{role}</span>
        </p>
      </div>
    </div>
  );
};
