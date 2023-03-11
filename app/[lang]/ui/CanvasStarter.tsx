'use client';

import { FC, useRef } from 'react';
import { useEffectOnce } from 'react-use';

export const CanvasStarter: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const particlesArray: any[] = [];

    if (!canvas || !ctx) {
      return;
    }

    const mouse = {
      x: undefined,
      y: undefined
    };

    // canvas.addEventListener('click', (evt) => {
    //   mouse.x = evt.x;
    //   mouse.y = evt.y;
    // });
    // canvas.addEventListener('mousemove', (evt) => {
    //   mouse.x = evt.x;
    //   mouse.y = evt.y;
    // });

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        // @ts-ignore
        this.x = Math.random() * canvas.width;
        // @ts-ignore
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        if (!ctx) return;

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
      }
    }

    init();

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    };

    animate();
  };

  //   useEffect(draw);
  useEffectOnce(draw);

  return (
    <div>
      {/* Create a canvas that can be controlleed with javascript code */}
      <canvas
        ref={canvasRef}
        id="canvas"
        width="350"
        height="350"
        className="bg-zinc-800 shadow-lightning absolute top-0 left-0 z-10"
      />
    </div>
  );
};
