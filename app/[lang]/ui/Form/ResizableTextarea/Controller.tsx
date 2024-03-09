import { Controller, ControllerRenderProps } from 'react-hook-form';
import Builder from './Builder';
import { ControllerProps } from './types';

export default function Proxy({
  control,
  name,
  required,
  ...others
}: ControllerProps) {
  const render = ({ field }: { field: ControllerRenderProps }) => (
    <Builder {...others} {...field} />
  );

  return (
    <Controller
      name={name}
      control={control}
      render={render}
      rules={{
        required: required ? 'Required' : false,
      }}
    />
  );
}
