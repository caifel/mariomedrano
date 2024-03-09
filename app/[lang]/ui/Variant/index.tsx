import cns from 'classnames';
import DiscountIcon from './img/discount.svg';
import styles from './styles.module.scss';

interface BuilderProps {
  amount: string;
  unit: string;
  unitPrice: string;

  isSelected?: boolean;
  className?: string;
  icon?: JSX.Element;
}

interface ControllerProps {
  isOutOfStock?: boolean;
  hasDiscount?: boolean;
}

const Builder = ({
  amount,
  unit,
  unitPrice,
  isSelected,
  className,
  icon,
}: BuilderProps) => (
  <div className={cns(className, isSelected && styles.selected)}>
    {icon}
    <p
      className={cns(styles.amountOfUnit, isSelected && styles.selected)}
    >{`${amount} ${unit}`}</p>
    <p
      className={cns(styles.pricePerUnit, isSelected && styles.selected)}
    >{`${unitPrice} € / ${unit}`}</p>
  </div>
);

export const Variant = ({
  isOutOfStock = false,
  hasDiscount = false,
  ...variantBuilderProps
}: ControllerProps & BuilderProps) => {
  if (isOutOfStock) {
    return (
      <Builder {...variantBuilderProps} className={styles.outOfStockVariant} />
    );
  }
  if (hasDiscount) {
    return (
      <Builder
        {...variantBuilderProps}
        className={styles.discountVariant}
        icon={<DiscountIcon className={styles.discountIcon} />}
      />
    );
  }
  return <Builder {...variantBuilderProps} className={styles.variant} />;
};
