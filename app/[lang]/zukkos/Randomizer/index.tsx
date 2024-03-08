'use client';

import { FC } from 'react';
import gsap from 'gsap';
import cn from './styles.module.scss';

type Props = {
  speed: number;
};

export const Randomizer: FC<Props> = () => {
  return (
    <div
      ref={(el) => {
        gsap.from(el, { duration: 3, y: 200, yoyo: true, repeat: -1 });
      }}
      className={cn.root}
    >
      {'Randomizer component'}
    </div>
  );
};
