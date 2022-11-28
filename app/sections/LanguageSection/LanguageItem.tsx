import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
}

export const LanguageItem: FC<IProps> = ({ className, data }) => {
  return (
    <div className={className}>
      <p className="c-primary fs-12 fw-100">
        <b>{data?.name}</b>
      </p>
      <p className="fs-12 fw-100 mt-5">
        <b>{data?.level}</b>
      </p>
    </div>
  );
};
