import { ResizableTextareaController } from '@ui/Form/ResizableTextarea';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Area } from 'react-easy-crop';
import { useFormContext } from 'react-hook-form';
import { ImageCropper } from './ImageCropper';
import CloseSvg from './img/close.svg';
import { readDataUrl } from './utils';

// TODO: Add random selector and it can work for the iching too
// Can cropper receive url as prop?

export const FormCard = ({}) => {
  const [imgData, setImgData] = useState<any>();
  const handleFocus = (event: any) => event.target.select();
  const { control, register, watch, setValue } = useFormContext();
  // const { title } = getValues();
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setValue('imageCropArea', croppedAreaPixels);
  }, []);

  const image = watch('image');

  useEffect(() => {
    if (image?.[0]) {
      readDataUrl(image[0]).then(setImgData);
    } else {
      setImgData(null);
    }
  }, [image]);

  return (
    <div className="w-full">
      {imgData ? (
        <div className="relative aspect-video">
          <button
            type="button"
            onClick={() => setValue('image', null)}
            aria-label="Remove Image"
            className=" z-10 bg-black p-2 outline-none absolute right-5 top-5 group"
          >
            <CloseSvg className="group-focus:text-white w-6 h-6 text-white/80" />
          </button>
          <ImageCropper image={imgData} onCropComplete={onCropComplete} />
        </div>
      ) : (
        <label className="relative">
          <input
            {...register('image', {
              required: true
            })}
            type="file"
            accept="image/png, image/jpeg, image/webp, image/gif"
            className="absolute w-px h-px opacity-0"
          />
          <Image alt="Image placeholder" width={1600} height={900} src="/images/16-9.webp" unoptimized priority />
        </label>
      )}

      <div className="flex items-start pl-5 pr-20 py-5">
        <Image
          className="rounded-full flex-shrink-0"
          alt="User Thumbnail"
          width={40}
          height={40}
          src="/images/wolf.webp"
          unoptimized
          priority
        />
        <div className="ml-6">
          <ResizableTextareaController
            name="title"
            control={control}
            onFocus={handleFocus}
            placeholder="Just type something..."
            required
            className="overflow-hidden w-full resize-none bg-transparent outline-none border-none text-xl font-semibold"
          />
          {/* <h2 className="text-xl font-semibold">{'War is the building block of economy'}</h2> */}
          {/* <p className="mt-3">
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          </p> */}
          <ResizableTextareaController
            name="description"
            control={control}
            onFocus={handleFocus}
            placeholder="Once upon a time..."
            required
            className="overflow-hidden w-full resize-none bg-transparent outline-none border-none mt-3"
          />
        </div>
      </div>
    </div>
  );
};
