import { FC } from 'react';
import cns from 'classnames';
import LoadingIndicatorSvg from './img/loading-indicator.svg';
import styles from './styles.module.scss';

type ElementType = React.ElementType;
type Variant = 'primary' | 'secondary' | 'clean';
type BuilderOwnProps<E extends ElementType> = {
  as?: E;
  block?: boolean;
  loading?: boolean;
  outline?: boolean;
  variant?: Variant;
  greyOutOnDisabled?: boolean;
};
type BuilderProps<E extends ElementType> = BuilderOwnProps<E> &
  React.ComponentProps<E>;

const Builder: FC<BuilderProps<ElementType>> = ({
  block,
  loading,
  outline,
  children,
  className = '',
  variant = 'primary',
  greyOutOnDisabled = true,
  as: Tag = 'button',
  ...others
}) => {
  return (
    <Tag
      className={cns({
        [styles.button]: true,
        [styles.block]: block,
        [styles.outline]: outline,
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.disabled]: greyOutOnDisabled && others.disabled,
        [className]: true,
      })}
      {...others}
    >
      {loading ? <div className="opacity-0">{children}</div> : children}
      {loading && <LoadingIndicatorSvg className={styles.loading} />}
    </Tag>
  );
};

type ButtonProps = Omit<BuilderProps<'button'>, 'as'>;
type LinkButtonProps = Omit<BuilderProps<'a'>, 'as'>;
type DivButtonProps = Omit<BuilderProps<'div'>, 'as'>;

export const Button: FC<ButtonProps> = (props) => {
  if (props.variant === 'clean') {
    return (
      <button className={styles.clean} {...props}>
        {props.children}
      </button>
    );
  }

  return <Builder {...props} />;
};
export const LinkButton: FC<LinkButtonProps> = (props) => (
  <Builder target="_blank" rel="noopener noreferrer" as="a" {...props} />
);
export const DivButton: FC<LinkButtonProps> = (props) => (
  <Builder as="div" {...props} />
);
