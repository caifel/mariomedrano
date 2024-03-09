'use client';

import { useState } from 'react';
import content from '../../blocks-inputs/logo.png';

export const ImageSample = () => {
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const convertToBase64 = () => {
    console.log(content, 'content');
    const blob = new Blob([`${content}`], { type: 'image/png' });
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      // console.log(reader.result, 'reader.result');

      const base64String = (reader.result as string).split(',')[1];
      // console.log(btoa(base64String), 'btoa(base64String)');
      setBase64Image(base64String);
      // console.log(base64String);
    };
  };

  return (
    <div>
      <button onClick={convertToBase64}>Convert to base64</button>
      {base64Image && <img src={`data:image/png;base64,${base64Image}`} />}
    </div>
  );
};
