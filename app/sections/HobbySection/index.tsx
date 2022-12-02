import { FC } from 'react';
import cns from 'classnames';
import { t } from '../../locales/en/all';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  hobbies: string[];
}

export const HobbySection: FC<IProps> = ({ hobbies, className }) => {
  return (
    <section className={cns(className)} id="hobby-section">
      <h2>
        <a className="align-items-center" href="#hobby-section">
          {t.section.hobbies.title}
        </a>
      </h2>

      <div className="mt-30 badge-container">
        {hobbies.map((hobby) => (
          <span className="badge-primary" key={hobby}>
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
};
