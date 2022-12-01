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
      <h2 className="justify-content-between" id="experience">
        <a href="#experience">{t.section.workingExperience.title}</a>
        <button className="c-link border-bottom ml-auto">{t.section.workingExperience.linkButton}</button>
      </h2>

      <div className="mt-30">
        {workingExperience.map((experience, index) => (
          <ExperienceItem className={index > 0 ? 'mt-20' : ''} key={experience.company} data={experience} />
        ))}
      </div>
    </section>
  );
};
