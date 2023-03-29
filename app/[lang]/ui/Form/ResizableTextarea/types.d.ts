export type BuilderProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

export type ControllerProps = BuilderProps & {
  name: string;
  required?: boolean;
  control: Control<any, any>;
};
