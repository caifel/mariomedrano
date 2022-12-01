import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
}

export const LanguageItem: FC<IProps> = ({ className, data }) => {
  return (
    <div className={className}>
      <p className="c-primary">
        <b>{data?.name}</b>
      </p>
      <p className="mt-5">
        <span>{data?.level}</span>
      </p>
    </div>
  );
};
