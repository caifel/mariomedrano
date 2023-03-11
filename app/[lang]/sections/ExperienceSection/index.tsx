import { i18n } from '@modules/i18n/i18n';
import cns from 'classnames';
import Link from 'next/link';
import { ExperienceItem } from './ExperienceItem';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  workingExperience: TWorkingExperience[];
}

export const ExperienceSection = ({ workingExperience, className }: IProps) => {
  const locale = i18n.getLocale();
  const dictionary = i18n.getDictionary();

  return (
    <section className={cns(className)} id="experience-section">
      <h2 className="flex items-center justify-between">
        <a href="#experience-section">{dictionary.section.workingExperience.title}</a>
        <Link href={`${locale}/what-and-how`}>
          <span className="link block">{dictionary.section.workingExperience.linkButton}</span>
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
