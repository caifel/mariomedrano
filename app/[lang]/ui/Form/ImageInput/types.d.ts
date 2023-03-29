export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type ControllerProps = {
  control: Control<any>;
} & InputProps;
