import cns from 'classnames';
import { FC } from 'react';
import { t } from '../../locales/en/all';
import { EducationItem } from './EducationItem';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  educationList: TEducation[];
}

export const EducationSection: FC<IProps> = ({ educationList, className }) => {
  return (
    <section className={cns(className)} id="education-section">
      <h2>
        <a className="align-items-center" href="#education-section">
          {t.section.education.title}
        </a>
      </h2>

      <div className="mt-30">
        {educationList.map((item, index) => (
          <EducationItem className={index > 0 ? 'mt-30' : ''} key={item.name} data={item} />
        ))}
      </div>
    </section>
  );
};
