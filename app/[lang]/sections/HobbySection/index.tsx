import { FC } from 'react';
import cns from 'classnames';
import { t } from '../../locales/en/all';
import Badge from '../../ui/Badge';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  hobbies: string[];
}

export const HobbySection: FC<IProps> = ({ hobbies, className }) => {
  return (
    <section className={cns(className)} id="hobby-section">
      <h2>
        <a className="flex items-center" href="#hobby-section">
          {t.section.hobbies.title}
        </a>
      </h2>

      <div className="flex flex-wrap gap-x-4 gap-y-4 mt-10">
        {hobbies.map((hobby) => (
          <Badge key={hobby}>{hobby}</Badge>
        ))}
      </div>
    </section>
  );
};
