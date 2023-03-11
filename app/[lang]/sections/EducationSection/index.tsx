import { i18n } from '@modules/i18n/i18n';
import cns from 'classnames';
import { EducationItem } from './EducationItem';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  educationList: TEducation[];
}

export const EducationSection = ({ educationList, className }: IProps) => {
  const dictionary = i18n.getDictionary();

  return (
    <section className={cns(className)} id="education-section">
      <h2>
        <a className="flex items-center" href="#education-section">
          {dictionary.section.education.title}
        </a>
      </h2>

      <div className="mt-10">
        {educationList.map((item, index) => (
          <EducationItem className={index > 0 ? 'mt-10' : ''} key={item.name} data={item} />
        ))}
      </div>
    </section>
  );
};
