'use client';

import { BAR_AND_LABEL_HEIGHT, ColorType, PROPORTION_MULTIPLIER } from '../constants';
import { getColor } from '../utils';

export const Bar = ({ percent, size, name, className, style }: TTask & React.HTMLAttributes<HTMLDivElement>) => {
  const color = getColor(percent);

  return (
    <div
      style={{
        ...style,
        height: BAR_AND_LABEL_HEIGHT
      }}
    >
      <p
        style={{
          fontSize: 9,
          color: 'lightgray',
          letterSpacing: 1,
          textShadow: `${color} 0px 0px 15px`
        }}
      >
        {name}
      </p>
      <div
        style={{
          marginTop: BAR_AND_LABEL_HEIGHT * 0.15,
          transform: 'rotate(180deg)',
          width: size * PROPORTION_MULTIPLIER,
          height: BAR_AND_LABEL_HEIGHT * 0.35,
          backgroundColor: color
        }}
        className={className}
      >
        <div
          style={{
            width: `${100 - percent}%`,
            height: '100%',
            backgroundColor: ColorType.disabled
          }}
        />
      </div>
    </div>
  );
};
