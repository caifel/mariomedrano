'use client';

import React, { FC, useEffect } from 'react';

function getMousePos(canvas: any, evt: any) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

export const CanvasTracker: FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const draw = (evt: any) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      console.log('canvas draw');
      const pos = getMousePos(canvas, evt);

      ctx.fillStyle = 'red';
      ctx.fillRect(pos.x, pos.y, 4, 4);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={draw}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
      }}
    />
  );
};
