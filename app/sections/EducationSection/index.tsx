import cns from 'classnames';
import { FC } from 'react';
import { t } from '../../locales/en/all';
import { EducationItem } from './EducationItem';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  educationList: TEducation[];
}

export const EducationSection: FC<IProps> = ({ educationList, className }) => {
  return (
    <section className={cns(className)}>
      <h2 className="fs-24">
        <span id="education" />
        <a className="align-items-center" href="#education">
          {t.section.education.title}
        </a>
      </h2>

      <div className="mt-30">
        {educationList.map((item) => (
          <EducationItem key={item.name} data={item} />
        ))}
      </div>
    </section>
  );
};
