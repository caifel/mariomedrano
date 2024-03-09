'use client';

import { FC, useRef } from 'react';
import { useEffectOnce } from 'react-use';

class Particle {
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(
    public x: number,
    public y: number,
    readonly hue: number,
    private ctx: CanvasRenderingContext2D,
  ) {
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5; // Slow: 1 - 0.5, Fast: 10 - 5
    this.speedY = Math.random() * 3 - 1.5; // Slow: 1 - 0.5, Fast: 10 - 5
    this.color = `hsl(${hue}, 100%, 50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) {
      this.size -= 0.1;
    }
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();

    // We add closePath if the object we just drew
    // can to be filled, otherwise when drawing a line,
    // for example we don't need to include it
  }
}

function drawGlassContainer(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
) {
  // Define the circle center and radius
  const centerX = x;
  const centerY = y;
  const radius = 200;

  const randowmBoolean = Math.random() >= 0.5;

  // Create a radial gradient that simulates the glass surface
  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    radius,
  );
  //   gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
  //   gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.1)');
  //   gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1');

  //   gradient.addColorStop(0, 'rgba(255, 0, 255, 0.3)');
  //   gradient.addColorStop(0.8, 'rgba(255, 0, 255, 0.1)');
  //   gradient.addColorStop(1, 'rgba(255, 0, 255, 0.1');

  // The glass color will be lighten if the content inside generates a lot of light

  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
  gradient.addColorStop(0.9, 'rgba(0, 0, 0, 0.3)');

  //   if (randowmBoolean) { // Instead use some logic
  gradient.addColorStop(1, 'rgba(0, 0, 300, 0.2'); // This one will change color
  //   }

  // gradient.addColorStop(1, 'rgba(255, 0, 255, 0.1');

  // Draw the solid circle shape
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'transparent';
  ctx.fill();

  // Draw the radial gradient on top of the circle
  ctx.fillStyle = gradient;
  ctx.fill();
}

function animationModule(
  particlesArray: Particle[],
  ctx: CanvasRenderingContext2D,
) {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      // Theory of Pythagoras
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.strokeStyle = particlesArray[i].color;
        ctx.lineWidth = 0.2; // Play with values
        // In case of electric, this value varies based on current intensity
        // ctx.lineWidth = particlesArray[i].size / 10;

        // Draw a line between two particles
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
    // try changing this value
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

export const CanvasPlayGround: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const init = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const particlesArray: any[] = [];
    let hue = 0;

    if (!canvas || !ctx) {
      return;
    }

    canvas.addEventListener('click', (evt) => {
      for (let i = 0; i < 10; i++) {
        particlesArray.push(new Particle(evt.x, evt.y, hue, ctx));
      }
    });
    canvas.addEventListener('mousemove', (evt) => {
      for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle(evt.x, evt.y, hue, ctx));
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Effect "cometa tail"
      // ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationModule(particlesArray, ctx);
      requestAnimationFrame(animate);
      hue += 0.5;

      drawGlassContainer(ctx, 250, 250);
    };

    animate();
  };

  //   useEffect(draw);
  useEffectOnce(init);

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        width="500"
        height="500"
        className=" bg-zinc-800 shadow-lightning shadow-red-500 absolute top-0 left-0 z-10"
        // Something is wrong with x and y when canvas is positioned right 0 for example.
      />
    </div>
  );
};
