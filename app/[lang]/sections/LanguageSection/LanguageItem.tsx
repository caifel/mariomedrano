import { FC } from 'react';
import cns from 'classnames';

interface IProps extends React.HTMLAttributes<HTMLAreaElement> {
  data: any;
}

export const LanguageItem: FC<IProps> = ({ className, data }) => {
  return (
    <article className={cns(className)}>
      <h3 className="text-red-500 dark:text-yellow-400">{data?.name}</h3>
      <p>
        <span>{data?.level}</span>
      </p>
    </article>
  );
};
