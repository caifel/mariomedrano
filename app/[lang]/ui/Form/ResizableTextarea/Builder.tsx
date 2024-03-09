import React from 'react';
import { BuilderProps } from './types';

export default React.forwardRef<HTMLTextAreaElement, BuilderProps>(
  function Builder(props, ref) {
    const onTextareaInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const el = e.currentTarget;

      // Calculate on component mount

      if (!el) return;

      // const numberOfLines = el.value.split(/\r*\n/).length;
      // console.log(numberOfLines);
      // for now set a max amount of characters

      el.style.height = 'auto'; // Reset the height
      el.style.height = el.scrollHeight + 'px'; // Set the new height based on the scroll height

      props.onInput?.(e);
    };

    return <textarea rows={1} onInput={onTextareaInput} {...props} ref={ref} />;
  },
);
