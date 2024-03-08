import { DragEventHandler, MouseEventHandler, RefObject, TouchEventHandler, useRef } from 'react';

export type Direction = 'up' | 'right' | 'down' | 'left';

export type Coordinates = {
  x: number;
  y: number;
};
type Config = {
  ref: RefObject<HTMLElement> | null;
  onDismiss?: () => void;
  onDirectionChange?: (direction: Direction) => void;
};
type Handler = (config: Config) => {
  onTouchStart: TouchEventHandler<HTMLDivElement>;
  onTouchMove: TouchEventHandler<HTMLDivElement>;
  onTouchEnd: TouchEventHandler<HTMLDivElement>;
  onTouchCancel: TouchEventHandler<HTMLDivElement>;
  onMouseDown: MouseEventHandler<HTMLDivElement>;
  onMouseMove: MouseEventHandler<HTMLDivElement>;
  onMouseUp: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
  onDragStart: DragEventHandler<HTMLDivElement>;
};

// TODO: Prevent reload top indicator ONLY when the card is moving.
// (usePreventTouchStart)

const isClient = typeof window === 'object';

function getDirection(distance: Coordinates): Direction {
  // Update to consider only left/right
  const angle = (Math.atan2(distance.y, distance.x) * 180) / Math.PI;

  if (angle < -45 && angle > -135) {
    return 'up';
  } else if (angle >= -45 && angle <= 45) {
    return 'right';
  } else if (angle > 45 && angle < 135) {
    return 'down';
  } else {
    return 'left';
  }
}
function getThreshold(direction: Direction, overralDistance: number) {
  const isTouchDevice = isClient && 'ontouchstart' in document.documentElement;
  const threshold = 200; // config
  const thresholdFactor = isTouchDevice ? 1 : 1.5; // config
  const extraThreshold = Math.abs(overralDistance);
  const extraThresholdFactor = 5; // config
  const isOpposite = direction === 'left' ? overralDistance > 0 : overralDistance < 0;

  return threshold * thresholdFactor + extraThreshold * extraThresholdFactor * (isOpposite ? 1 : -1);
}

export const useSwipe: Handler = ({ ref, onDismiss, onDirectionChange }) => {
  const moving = useRef(false);
  const startPoint = useRef<Coordinates>({ x: 0, y: 0 });
  const startTimeStamp = useRef(0);
  const previousPoint = useRef<Coordinates>({ x: 0, y: 0 });
  const previousTimeStamp = useRef(0);
  const speed = useRef(0);
  const distance = useRef(0);
  const time = useRef(0);
  const direction = useRef<Direction>('right');

  console.info('useSwipe');

  const start = (coordinates: Coordinates) => {
    moving.current = true;
    startPoint.current = coordinates;
    startTimeStamp.current = Date.now();
  };
  const move = (coordinates: Coordinates) => {
    if (!moving.current) return;
    if (!ref?.current) return;

    previousPoint.current = coordinates;

    const deltaX = coordinates.x - startPoint.current.x;
    // const deltaY = coordinates.y - startPoint.current.y;
    const deltaY = 0;

    ref.current.style.transition = 'transform 0s';
    ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deltaX * 0.1}deg)`;
    // ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deltaX * 0.1}deg)`;
  };
  const complete = (coordinates: Coordinates) => {
    if (!moving.current) return;
    if (!ref?.current) return;

    moving.current = false;

    const directionFactor = direction.current === 'right' ? 1 : -1;
    const overralDeltaX = coordinates.x - startPoint.current.x;
    const targetX = window.innerWidth * directionFactor;
    // TODO KEEP ACCELERATION, NOW THE MOVEMENT IS NOT SMOOTH
    const threshold = getThreshold(direction.current, overralDeltaX);
    const shouldRemove = ['right', 'left'].includes(direction.current) && speed.current > threshold;

    if (shouldRemove) {
      console.log('time', time.current);
      // ref.current.style.transform = `translate(${targetX}px, ${0}px) rotate(${
      //   60 * directionFactor
      // }deg)`;
      ref.current.style.transition = 'transform 1s';
      ref.current.style.transform = `translate(${targetX}px, ${0}px) rotate(${0}deg)`;
      onDismiss && setTimeout(onDismiss, 500);
    } else {
      ref.current.style.transition = 'transform 0.5s';
      ref.current.style.transform = 'translate(0px, 0px) rotate(0deg)';
    }
  };

  return {
    // Touch events
    onTouchStart: (e) => {
      const touch = e.changedTouches?.[0];
      if (!touch) return;
      start({ x: touch.clientX, y: touch.clientY });
    },
    onTouchMove: (e) => {
      const touch = e.changedTouches?.[0];
      if (!touch) return;

      const deltaX = touch.clientX - previousPoint.current.x;
      const deltaY = touch.clientY - previousPoint.current.y;

      direction.current = getDirection({ x: deltaX, y: deltaY });

      time.current = (e.timeStamp - previousTimeStamp.current) / 1000;
      distance.current = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      speed.current = Math.floor(distance.current / time.current);

      previousTimeStamp.current = e.timeStamp;

      move({ x: touch.clientX, y: touch.clientY });
    },
    onTouchEnd: (e) => {
      const touch = e.changedTouches?.[0];
      if (!touch) return;
      complete({ x: touch.clientX, y: touch.clientY });
    },
    onTouchCancel: (e) => {
      const touch = e.changedTouches?.[0];
      if (!touch) return;
      complete({ x: touch.clientX, y: touch.clientY });
    },

    // Mouse events
    onMouseDown: (e) => {
      e.preventDefault();
      start({ x: e.clientX, y: e.clientY });
    },
    onMouseMove: (e) => {
      e.preventDefault();
      move({ x: e.clientX, y: e.clientY });
    },
    onMouseUp: (e) => {
      e.preventDefault();
      complete({ x: e.clientX, y: e.clientY });
    },
    onMouseLeave: (e) => {
      e.preventDefault();
      complete({ x: e.clientX, y: e.clientY });
    },

    // Other props
    onDragStart: (e) => {
      e.preventDefault();
    }
  };
};
