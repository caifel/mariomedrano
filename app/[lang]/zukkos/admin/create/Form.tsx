'use client';

import { ResizableTextareaController } from '@ui/Form/ResizableTextarea';
import cns from 'classnames';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Area } from 'react-easy-crop';
import { useForm } from 'react-hook-form';
import { ImageCropper } from './ImageCropper';
import CloseSvg from './img/close.svg';
import PlusSvg from './img/plus.svg';
import { useSave } from './useSave';
import { readDataUrl } from './utils';

type Props = {
  id?: string;
  title?: string;
  imgUrl?: string;
};

export const Form = ({ title, imgUrl, id }: Props) => {
  const { onSubmit } = useSave();
  const isCreate = !id;
  const { register, handleSubmit, formState, setValue, watch, control } = useForm({
    defaultValues: {
      id,
      image: null,
      imageCropArea: {},
      title: title || '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  });
  const { isValid, isSubmitting, isDirty } = formState;

  const [imgData, setImgData] = useState<any>();
  const handleFocus = (event: any) => event.target.select();
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
                required: isCreate
              })}
              type="file"
              accept="image/png, image/jpeg, image/webp, image/gif"
              className="absolute w-px h-px opacity-0"
            />
            <Image
              className="cursor-pointer"
              alt="Image placeholder"
              width={1600}
              height={900}
              src={imgUrl || '/images/16-9.webp'}
              unoptimized
              priority
            />
          </label>
        )}

        <div className="flex items-start pl-2 mt-4 pb-2">
          <Image
            className="rounded-full flex-shrink-0"
            alt="Picture of the author"
            width={35}
            height={35}
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
            <ResizableTextareaController
              name="description"
              control={control}
              onFocus={handleFocus}
              placeholder="Once upon a time..."
              required
              className="overflow-hidden w-full resize-none bg-transparent outline-none border-none mt-1"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto flex">
        {/* <div className="flex-shrink-0 w-[90px] h-[160px] border-blue-600 border-2 ml-5"></div> */}
        <button
          type="button"
          className="group outline-none focus:border-white/80 flex-shrink-0 w-[90px] h-[160px] border-white/50 border-2 ml-5 mr-5 transition-colors duration-300"
        >
          <PlusSvg className=" group-focus:text-white/80 text-white/60 w-12 h-12 mx-auto transition-colors duration-300" />
        </button>

        {/* Display only if no chapters were added */}
        <div className="pl-5 pr-10">
          <p>
            <span>{'Add at least '}</span>
            <b className="text-blue-500">{'one chapter.'}</b>
          </p>
          <p className="mt-3 text-gray-400">
            {'You can add as many as you wish, but studies have shown that more than 13 lose people attention'}
          </p>
        </div>
      </div>

      <button
        disabled={!isValid || isSubmitting || !isDirty}
        className={cns(
          'outline-none max-w-xl mx-auto fixed bottom-0 left-0 right-0 rounded-none h-16 select-none transition-colors duration-300',
          {
            'focus:bg-blue-800 bg-blue-900': true,
            // 'focus:bg-green-700 bg-green-800': true,
            'opacity-50': !isValid || isSubmitting || !isDirty
          }
        )}
      >
        <span className="text-2xl font-semibold tracking-widest">{isCreate ? 'CREATE' : 'SAVE'}</span>
      </button>
    </form>
  );
};
