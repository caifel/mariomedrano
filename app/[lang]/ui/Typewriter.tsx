import React, { useEffect, useRef } from 'react';

type Props = {
  text: string;
  delay?: number;
  className?: string;
};

const Builder = ({ text, delay = 50, className }: Props) => {
  // const ref = useRef<HTMLParagraphElement>(null);

  // useEffect(() => {
  //   let index = 0;

  //   function typeNextCharacter() {
  //     if (!ref.current) return;

  //     if (index < text.length) {
  //       ref.current.innerHTML += text[index];
  //       index++;
  //       setTimeout(typeNextCharacter, delay);
  //     }
  //   }

  //   typeNextCharacter();
  // }, []);

  return (
    <p
      className={className}
      ref={(el) => {
        let index = 0;
        
        if (el) {
          el.innerHTML = '';
        }

        function typeNextCharacter() {
          if (!el) return;

          if (index < text.length) {
            el.innerHTML += text[index];
            index++;
            setTimeout(typeNextCharacter, delay);
          }
        }

        typeNextCharacter();
      }}
    />
  );
};

// const Typewriter = React.memo(Builder, () => true);
const Typewriter = React.memo(Builder);

export { Typewriter };
