import { FC } from 'react';
import { t } from '../locales/en/all';
import { Space } from '../ui/Space';
import cns from 'classnames';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DescriptionSection: FC<IProps> = ({ className }) => {
  return (
    <div className={cns(className, 'h3')}>
      <p className="lh-2">
        <span>{t.description.part1}</span>
        <Space />
        <span className="c-primary">{t.description.part2}</span>
        <Space />
        <span>{t.description.part3}</span>
      </p>

      <p className="lh-2 mt-20">
        <span>{t.description.part4}</span>
        <Space />
        <span className="c-primary">{t.description.part5}</span>
        <Space />
        <span>{t.description.part6}</span>
      </p>
    </div>
  );
};
