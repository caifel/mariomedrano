'use client';

import { Ref, useEffect, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';
import { Button } from '@ui/Button';
import { ImageInputController } from '@ui/Form/ImageInput';
import {
  ResizableTextarea,
  ResizableTextareaController,
} from '@ui/Form/ResizableTextarea';
import { Typewriter } from './Typewriter';

const FileUploadForm = () => {
  const imageFieldRef = useRef<
    HTMLInputElement & {
      files: FileList;
    }
  >();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [imgData, setImgData] = useState<
    string | ArrayBuffer | null | undefined
  >();
  const onCropComplete = (percentages: any, pixels: any) =>
    console.log('pixels', pixels, 'percentages', percentages);

  // crop? yes/no
  // undo? yes/no
  // only crop if the image doesn't fit the aspect ratio

  //
  const [editingField, setEditingField] = useState<
    'title' | 'description' | null
  >(null);
  const [sampleText, setSampleText] = useState('Once upon a time...');
  //

  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: null,
      title: '',
      description: '',
    },
  });

  const image = watch('image');

  useEffect(() => {
    if (image) {
      const fileObject = imageFieldRef?.current?.files[0];

      if (!fileObject) return;

      const reader = new FileReader();

      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });

      reader.readAsDataURL(fileObject);
    } else {
      setImgData(null);
    }
  }, [image]);

  const onSubmit = async ({ image, ...data }: any) => {
    const formData = new FormData();

    console.log('data', data);

    return;

    try {
      let response = await fetch('server', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const entity: { id: string } = await response.json();

      formData.append('image', image?.[0]);
      formData.append('id', entity.id);

      response = await fetch('/api/zukkos/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.info(data.message);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  };

  // story telling mode
  // return (
  //   <ReactModal className="px-10 flex items-center w-full h-full bg-zinc-800" isOpen>
  //     <Button
  //       className="absolute top-0"
  //       onClick={() => setSampleText('Three tiger where triggering some tress in a trilogy')}
  //     >
  //       Update Text
  //     </Button>
  //     <Typewriter text={sampleText} className=" text-white text-5xl leading-loose" />
  //   </ReactModal>
  // );

  // form centric
  return (
    <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
      <Button type="button" onClick={() => setEditingField('title')}>
        {'start'}
      </Button>

      <ReactModal
        ariaHideApp={false}
        className="px-10 w-full h-full bg-zinc-800"
        isOpen={!!editingField}
      >
        <ResizableTextareaController
          name="title"
          control={control}
          placeholder="something..."
          maxLength={80}
          autoFocus
          className="text-white text-5xl border-none outline-none bg-transparent overflow-y-hidden leading-loose"
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
              event.preventDefault();
              setEditingField(null);
            }
          }}
        />

        <Button onClick={() => setEditingField(null)}>{'OK'}</Button>
      </ReactModal>

      <div className="mt-5 flex gap-x-3 items-center">
        <ImageInputController
          ref={imageFieldRef as Ref<HTMLInputElement>}
          id="image"
          control={control}
          name="image"
          // required
        />
      </div>

      {imgData && (
        <div className="mt-10 relative w-full h-[500px]">
          <Cropper
            crop={crop}
            aspect={16 / 9}
            // aspect={9 / 16}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            image={imgData as string}
          />
        </div>
      )}

      {/* <ResizableTextareaController name="title" control={control} placeholder="something..." maxLength={80} /> */}

      {/* <div className="mt-5 flex flex-col">
        <label htmlFor="title">Title:</label>
        <input
          className="mt-3 px-5 h-12 text-zinc-800"
          type="text"
          id="title"
          {...register('title', { required: 'Please enter a title.' })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div> */}

      <div className="mt-5 flex flex-col">
        <label htmlFor="description">Description:</label>
        <input
          className="mt-3 px-5 h-12 text-zinc-800"
          type="text"
          id="description"
          {...register('description')}
        />
      </div>

      <Button type="submit" block className="mt-10">
        SAVE
      </Button>
    </form>
  );
};

export default FileUploadForm;
