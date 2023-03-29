import { useState } from 'react';
import Cropper, { CropperProps } from 'react-easy-crop';

export const ImageCropper = (props: Partial<CropperProps>) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  return (
    <Cropper
      crop={crop}
      zoom={zoom}
      aspect={16 / 9}
      // aspect={9 / 16}
      onZoomChange={setZoom}
      onCropChange={setCrop}
      objectFit="horizontal-cover"
      {...props}
    />
  );
};
