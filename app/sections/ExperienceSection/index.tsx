import { FC } from 'react';
import cns from 'classnames';
import { ExperienceItem } from './ExperienceItem';
import { t } from '../../locales/en/all';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  workingExperience: TWorkingExperience[];
}

export const ExperienceSection: FC<IProps> = ({ workingExperience, className }) => {
  return (
    <section className={cns(className)}>
      <h2 className="fs-24">
        <span id="experience" />
        <a className="align-items-center" href="#experience">
          {t.section.workingExperience.title}
        </a>
      </h2>

      <div className="mt-30">
        {workingExperience.map((experience) => (
          <ExperienceItem key={experience.company} data={experience} />
        ))}
      </div>
    </section>
  );
};