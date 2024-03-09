import React, { FC, useRef } from 'react';
import { Direction, useSwipe } from '@ui/utils/useSwipe';

type OwnProps = {
  // src: string;
  onDismiss: any;
  onDirectionChange?: (direction: Direction) => void;
};

const Builder: FC<OwnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  onDismiss,
  onDirectionChange,
  className,
  // src,
  ...others
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const swipeEvents = useSwipe({ ref, onDismiss, onDirectionChange });

  return (
    <div ref={ref} {...swipeEvents} {...others} className={className}>
      {children}
    </div>
    //   {children}
    // </img>
  );
};
const SwipeableElement = React.memo(Builder, () => true);

export { SwipeableElement };
