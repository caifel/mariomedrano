import cns from 'classnames';
import { FC } from 'react';
import HandByeIcon from '../images/hand-bye.svg';
import { t } from '../locales/en/all';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeFooter: FC<IProps> = ({ className }) => {
  return (
    <footer className={cns(className, 'h3 lh-2')}>
      <p>
        <span>{t.footer.part1}</span>
      </p>
      <p>
        <b className="c-primary">{t.footer.part2}</b>
      </p>
      <p className="align-items-center">
        <span>{t.footer.part3}</span>
        <HandByeIcon className="ml-10 c-primary" />
      </p>
    </footer>
  );
};
