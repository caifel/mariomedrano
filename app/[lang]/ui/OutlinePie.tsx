'use client';

import React, { FC, useEffect, useRef } from 'react';
import cns from 'classnames';
import { useEffectOnce } from 'react-use';
import useTabVisibility from './utils/useTabVisibility';

type BuilderProps = {
  arcSize?: number;
  size?: number;
  className?: string;
} & React.SVGProps<SVGSVGElement>;
type ControllerProps = {
  seconds: number;
  size?: number;
  isPaused?: boolean;
};

export const Builder: React.FC<BuilderProps> = ({
  arcSize = 0.5,
  size = 100,
  className,
  ...others
}) => {
  const strokeWidth = size / 10;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - arcSize);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} {...others}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        className={'stroke-slate-400/50'}
        strokeWidth={1}
        strokeDasharray={circumference}
        strokeDashoffset={0}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        className={className}
        strokeWidth={strokeWidth}
        // fill="url(#neon-gradient)"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          transition: 'stroke-dashoffset 1s linear',
        }}
      />
      {/* <radialGradient id="neon-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="black" />
        <stop offset="90%" stopColor="white" />
        <stop offset="100%" stopColor="black" />
      </radialGradient> */}
    </svg>
  );
};

export const OutlinePie: FC<BuilderProps & ControllerProps> = ({
  isPaused,
  seconds,
  size,
  ...others
}) => {
  const totalSeconds = useRef(seconds);
  const arcSize = seconds / totalSeconds.current;

  return (
    <Builder
      {...others}
      className={cns({
        'animate-pulse': isPaused,
        // 'stroke-blue-500': isPaused,
        'stroke-green-500': arcSize > 0.4,
        'stroke-yellow-500': arcSize > 0.2 && arcSize <= 0.4,
        'stroke-red-500': arcSize <= 0.2,
      })}
      arcSize={arcSize}
    />
  );
};
