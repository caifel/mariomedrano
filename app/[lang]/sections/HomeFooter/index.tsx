import cns from 'classnames';
import { FC } from 'react';
import HandByeIcon from '../../images/hand-bye.svg';
import { t } from '../../locales/en/all';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeFooter: FC<IProps> = ({ className }) => {
  return (
    <footer className={cns(className, 'text-lg leading-10 pb-16 flex flex-col items-end')}>
      <p>
        <span>{t.footer.part1}</span>
      </p>
      <p>
        <span className="text-red-500 dark:text-yellow-400">{t.footer.part2}</span>
      </p>
      <p className="flex items-center">
        <span>{t.footer.part3}</span>
        <HandByeIcon className="ml-2.5 text-red-500 dark:text-yellow-400" />
      </p>
    </footer>
  );
};
