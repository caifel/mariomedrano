import cns from 'classnames';
import styles from './styles.module.scss';
import DiscountIcon from '../img/discount.svg';

interface IVariantBuilder {
  amount: string;
  unit: string;
  unitPrice: string;

  isSelected?: boolean;
  className?: string;
  icon?: JSX.Element;
}

interface IVariantController {
  isOutOfStock?: boolean;
  hasDiscount?: boolean;
}

const VariantBuilder = ({ amount, unit, unitPrice, isSelected, className, icon }: IVariantBuilder) => (
  <div className={cns(className, isSelected && styles.selected)}>
    {icon}
    <p className={cns(styles.amountOfUnit, isSelected && styles.selected)}>{`${amount} ${unit}`}</p>
    <p className={cns(styles.pricePerUnit, isSelected && styles.selected)}>{`${unitPrice} € / ${unit}`}</p>
  </div>
);

export const Variant = ({
  isOutOfStock = false,
  hasDiscount = false,
  ...variantBuilderProps
}: IVariantController & IVariantBuilder) => {
  if (isOutOfStock) {
    return <VariantBuilder {...variantBuilderProps} className={styles.outOfStockVariant} />;
  } else if (hasDiscount) {
    return (
      <VariantBuilder
        {...variantBuilderProps}
        className={styles.discountVariant}
        icon={<DiscountIcon className={styles.discountIcon} />}
      />
    );
  } else {
    return <VariantBuilder {...variantBuilderProps} className={styles.variant} />;
  }
};
