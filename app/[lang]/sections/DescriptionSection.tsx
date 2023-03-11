import cns from 'classnames';
import { FC } from 'react';
import { t } from '../locales/en/all';
import { Space } from '../ui/Space';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DescriptionSection: FC<IProps> = ({ className }) => {
  return (
    <div className={cns(className, 'text-xl')}>
      <p>
        <span>{t.description.part1}</span>
        <Space />
        <span className="text-red-500 dark:text-yellow-400">{t.description.part2}</span>
        <Space />
        <span>{t.description.part3}</span>
      </p>

      <p className="mt-6">
        <span>{t.description.part4}</span>
        <Space />
        <span className="text-red-500 dark:text-yellow-400">{t.description.part5}</span>
        <Space />
        <span>{t.description.part6}</span>
      </p>
    </div>
  );
};
