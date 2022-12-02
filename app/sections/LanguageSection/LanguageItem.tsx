import { FC } from 'react';
import cns from 'classnames';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: any;
}

export const LanguageItem: FC<IProps> = ({ className, data }) => {
  return (
    <article className={cns(className, 'lh-2')}>
      <p className="c-primary">
        <b>{data?.name}</b>
      </p>
      <p>
        <span>{data?.level}</span>
      </p>
    </article>
  );
};
