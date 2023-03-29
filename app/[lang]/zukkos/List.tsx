'use client';

import { SwipeableElement } from '@ui/SwipeableElement';
import { usePreventTouchStart } from '@ui/utils/usePreventTouchStart';
import { memo, useCallback, useState } from 'react';
import styles from './List.module.scss';

// const initialColorValues = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5'];
const initialColorValues = [
  'https://cdn.midjourney.com/c3ff27c9-cfc1-475e-94ee-26ffc57b524f/grid_0.png',
  'https://cdn.midjourney.com/d3bde431-b113-4934-881c-220fe7496fa8/grid_0.png',
  'https://cdn.midjourney.com/18968367-7b49-421f-8640-b92c9d9f81eb/grid_0.png',
  'https://cdn.midjourney.com/de10b40b-f1b2-49e6-b5e0-d1c0541673e1/grid_0.png'
];

const List = memo(() => {
  usePreventTouchStart(); // TODO: only when the card is moving. Is important in mobile to reload
  const [values, setValues] = useState(initialColorValues);
  const handleRemove = useCallback(() => {
    // Removes the first element
    setValues((prev) => prev.slice(1, prev.length));
  }, []);

  return (
    <div className={styles.list}>
      <img src="https://cdn.midjourney.com/cda0af9e-9927-41b7-b52b-9a62003969c7/grid_0.png" className={styles.card} />
      {[values[1], values[0]].filter(Boolean).map((value) => (
        <SwipeableElement
          key={value}
          src={value}
          onDismiss={handleRemove}
          className={styles.card}
          style={{
            // this is causing re renders // fixed in SwipeableElement
            // rotate: `-${index * 2}deg`,
            backgroundColor: value
          }}
        >
          {value}
        </SwipeableElement>
      ))}
    </div>
  );
});

List.displayName = 'List';

export { List };
