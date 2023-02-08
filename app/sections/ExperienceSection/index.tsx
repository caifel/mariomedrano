import cns from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { t } from '../../locales/en/all';
import { ExperienceItem } from './ExperienceItem';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  workingExperience: TWorkingExperience[];
}

export const ExperienceSection: FC<IProps> = ({ workingExperience, className }) => {
  return (
    <section className={cns(className)} id="experience-section">
      <h2 className="flex items-center justify-between">
        <a href="#experience-section">{t.section.workingExperience.title}</a>
        <Link href="/what-and-how">
          <span className="link block">{t.section.workingExperience.linkButton}</span>
        </Link>
      </h2>

      <div className="mt-10">
        {workingExperience.map((experience, index) => (
          <ExperienceItem className={index > 0 ? 'mt-10' : ''} key={experience.company} data={experience} />
        ))}
      </div>
    </section>
  );
};
