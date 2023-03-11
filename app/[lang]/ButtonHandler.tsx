'use client';

import { Button } from '@ui/Button';

const handler = async () => {
  const response = await fetch('/api');
  const data = await response.json();
  console.log(data, 'data');
};

export const ButtonHandler = () => {
  return <Button onClick={handler}>{'Click me'}</Button>;
};
