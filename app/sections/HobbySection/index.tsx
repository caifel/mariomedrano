import { FC } from 'react';
import cns from 'classnames';
import { t } from '../../locales/en/all';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  hobbies: string[];
}

export const HobbySection: FC<IProps> = ({ hobbies, className }) => {
  return (
    <section className={cns(className)}>
      <h2 className="fs-24" id="hobbies">
        <a className="align-items-center" href="#experience">
          {t.section.hobbies.title}
        </a>
      </h2>

      <div className="mt-10">
        {hobbies.map((hobby) => (
          <span className="badge-primary mr-20 mt-20" key={hobby}>
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
};
