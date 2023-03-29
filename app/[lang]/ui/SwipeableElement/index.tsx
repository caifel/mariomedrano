import { Direction, useSwipe } from '@ui/utils/useSwipe';
import React, { FC, useRef } from 'react';

type OwnProps = {
  src: string;
  onDismiss: any;
  onDirectionChange?: (direction: Direction) => void;
};

const Builder: FC<OwnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  onDismiss,
  onDirectionChange,
  className,
  src,
  ...others
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const events = useSwipe({ ref, onDismiss, onDirectionChange });

  return (
    <div ref={ref} {...events} {...others} className={className}>
      <img src={src} />
    </div>
    //   {children}
    // </img>
  );
};
const SwipeableElement = React.memo(Builder, () => true);

export { SwipeableElement };
