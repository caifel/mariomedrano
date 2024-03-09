type Props = React.HTMLAttributes<HTMLDivElement>;

export const FieldError = ({ children, className }: Props) => (
  <small
    className={`rounded font-semibold float-right px-2 py-0.5 bg-red-500 text-white ${className}`}
  >
    {children}
  </small>
);
