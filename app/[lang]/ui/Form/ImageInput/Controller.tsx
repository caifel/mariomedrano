import React from 'react';
import { Controller, ControllerRenderProps } from 'react-hook-form';
import { FieldError } from '../FieldError';
import ImageInputBuilder from './Builder';
import { ControllerProps } from './types';

// eslint-disable-next-line react/display-name
export default React.forwardRef<HTMLInputElement, ControllerProps>(({ control, name, required, ...others }, ref) => {
  const render = ({ field, fieldState }: { field: ControllerRenderProps; fieldState: any }) => (
    <div className="relative w-full">
      <ImageInputBuilder {...others} {...field} ref={ref} />
      {fieldState.error?.message && (
        <FieldError className="absolute top-0 right-0">{fieldState.error?.message}</FieldError>
      )}
    </div>
  );

  return (
    <Controller
      name={name!}
      control={control}
      render={render}
      rules={{
        required: required ? 'Required' : false
      }}
    />
  );
});
