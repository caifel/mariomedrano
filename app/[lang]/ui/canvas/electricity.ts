export const electricity = () => {
  // Get the canvas and its context
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  function update() {
    const startX = canvas.width / 2;
    const startY = canvas.height / 2;
    let x = startX;
    let y = startY;

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set up stroke style for electric effect
    ctx.lineWidth = 1.5;
    // ctx.strokeStyle = 'rgb(255, 50, 0)';
    // ctx.strokeStyle = 'rgb(255, 200, 0)';
    // green electirc color
    ctx.strokeStyle = 'rgb(0, 250, 110)';

    ctx.lineCap = 'round';

    // Draw bolt-like effect
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    const speedX = Math.random() * 50 - 25;
    // direction can be any direction
    // make direction to be only to the north
    let speedY = Math.random() * 50 - 25;

    for (let i = 0; i < 3; i++) {
      // The initial direction should be distributed uniformly

      // but the lines should not be distributed uniformly, once
      // the line has started it has a direction ..

      if (i > 0) {
        // speedX = Math.random() * 50 - 25;
        speedY = Math.random() * 50 - 25;
      }
      //   if (i === 0) {
      //     ctx.strokeStyle = 'rgb(200, 50, 210)';
      //   } else {
      //     ctx.strokeStyle = 'rgb(0, 250, 110)';
      //   }

      x += speedX;
      y += speedY;

      ctx.lineTo(x, y);
      ctx.stroke();
      // gradient stroke

      //   ctx.closePath(); // interesting
    }

    ctx.lineWidth = 0.1;
    // ctx.strokeStyle = 'rgb(255, 180, 0)';

    // Add additional bolt branches
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(startX, startY);

      x = startX;
      y = startY;

      for (let j = 0; j < 5; j++) {
        const speedX = Math.random() * 50 - 25;
        const speedY = Math.random() * 50 - 25;

        x += speedX;
        y += speedY;

        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }

    // Request the next frame of the animation
    requestAnimationFrame(update);
  }

  // Start the animation by requesting the first frame
  requestAnimationFrame(update);
};
