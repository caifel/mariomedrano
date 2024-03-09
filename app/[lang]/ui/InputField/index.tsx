import { UseFormRegisterReturn } from 'react-hook-form';

type TInputField = {
  control?: UseFormRegisterReturn;
} & React.InputHTMLAttributes<HTMLInputElement>;

type TInputFieldGroup = {
  control?: UseFormRegisterReturn;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelText: string;
  containerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({ id, type, control, ...props }: TInputField) => (
  <input type={type} id={id} {...props} {...control} />
);

export const InputFieldGroup = ({
  labelText,
  containerClassName,
  control,
  inputProps,
}: TInputFieldGroup) => (
  <div className={containerClassName}>
    <label htmlFor={inputProps?.id}>{labelText}</label>
    <InputField id={inputProps?.id} control={control} {...inputProps} />
  </div>
);
