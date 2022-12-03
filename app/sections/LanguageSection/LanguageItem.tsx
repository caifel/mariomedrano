import cns from 'classnames';
import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: any;
}

export const LanguageItem: FC<IProps> = ({ className, data }) => {
  return (
    <article className={cns(className, 'lh-2')}>
      <h3 className="c-primary">{data?.name}</h3>
      <p>
        <span>{data?.level}</span>
      </p>
    </article>
  );
};
