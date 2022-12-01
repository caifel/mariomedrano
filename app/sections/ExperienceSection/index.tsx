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
    <section className={cns(className)}>
      <h2 className="justify-content-between align-items-center" id="experience">
        <a href="#experience">{t.section.workingExperience.title}</a>
        <Link href="/what-and-how" className="c-link">
          <span className="link d-block">{t.section.workingExperience.linkButton}</span>
        </Link>
      </h2>

      <div className="mt-30">
        {workingExperience.map((experience, index) => (
          <ExperienceItem className={index > 0 ? 'mt-30' : ''} key={experience.company} data={experience} />
        ))}
      </div>
    </section>
  );
};
