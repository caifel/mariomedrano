'use client';

import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ThreeDotsButton: FC<IProps> = ({ onClick }) => {
  return (
    <button
      aria-label="Change Theme"
      onClick={onClick}
      className="flex items-center gap-3 h-8"
    >
      <span className="rounded-full h-2 w-2 bg-red-600 shadow-red-600 dark:bg-yellow-300 dark:shadow-yellow-600 shadow-lightning" />
      <span className="rounded-full h-2 w-2 bg-red-600 shadow-red-600 dark:bg-yellow-300 dark:shadow-yellow-600 shadow-lightning" />
      <span className="rounded-full h-2 w-2 bg-red-600 shadow-red-600 dark:bg-yellow-300 dark:shadow-yellow-600 shadow-lightning" />
    </button>
  );
};

export const ThreeDotsButtonController: FC = () => {
  const handleChangeTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  return <ThreeDotsButton onClick={handleChangeTheme} />;
};
