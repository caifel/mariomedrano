import { FC } from 'react';
import { personalInfo } from '../../data';
import { t } from '../../locales/en/all';
import { ThreeDotsButtonController } from '../../ui/ThreeDotsButton';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeHeader: FC<IProps> = ({ className }) => {
  return (
    <header className={className}>
      <div className="flex items-center justify-between">
        <code>{'@ C a i f e l'}</code>
        <ThreeDotsButtonController />
      </div>
      <h1 className="mt-28">{personalInfo.name}</h1>
      <p className="mt-16 text-right text-xl">{personalInfo.role}</p>
      <p className=" mt-2 text-right">
        <a className="link" href={`mailto:${personalInfo.email}`}>
          {t.common.getInTouch}
        </a>
      </p>
    </header>
  );
};
