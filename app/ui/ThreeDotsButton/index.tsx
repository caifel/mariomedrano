'use client';

import { FC } from 'react';
import styles from './styles.module.scss';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ThreeDotsButton: FC<IProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.custom}>
      <span aria-label="dark yellow theme"></span>
      <span aria-label="light red theme"></span>
      <span aria-label="light red theme"></span>
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
