import cns from 'classnames';

type TProps = {
  color?: 'primary' | 'secondary';
} & React.HTMLAttributes<HTMLSpanElement>;

const Badge = ({ children, className, color = 'primary' }: TProps) => {
  return (
    <span
      className={cns(
        'flex',
        'items-center',
        'border',
        'rounded-xl',
        'cursor-default',
        // Color
        {
          'text-red-600': color === 'primary',
          'border-red-600/40': color === 'primary',
          'dark:text-yellow-400': color === 'primary',
          'dark:border-yellow-400/40': color === 'primary',

          'text-zinc-800': color === 'secondary',
          'border-zinc-800/50': color === 'secondary',
          'dark:text-white': color === 'secondary',
          'dark:border-white/50': color === 'secondary',
        },
        // Size
        'text-xs px-2.5 py-2',
        'md:text-sm md:px-3 md:py-2.5',
        'lg:text-lg lg:px-3.5 lg:py-3',
        // Others
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
