import cns from 'classnames';
import DiscountIcon from './img/discount.svg';

// Note: All exported components share the same interface
interface IVariantItem extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
  amount: number;
  unit: string;
  unitPrice: string;
}

export const VariantItem = ({ amount, className, isSelected, unit, unitPrice }: IVariantItem) => (
  <div
    className={cns(
      'border rounded-[5px]',
      'py-[10px] px-[15px] flex flex-col gap-y-[5px]',
      'w-max relative',
      'cursor-default',
      {
        'bg-white border-[#E7E7E7]': !isSelected,
        'bg-[#FEF6F5] border-[#E64B32]': isSelected
      },
      className
    )}
  >
    <p
      className={cns('text-sm tracking-[-0.15px]', {
        'text-[#0C2638] font-normal': !isSelected,
        'text-[#0C2638] font-semibold': isSelected
      })}
    >{`${amount} ${unit}`}</p>
    <p
      className={cns('text-xs tracking-[-0.15px]', {
        'text-[#85939B] font-semibold': true
      })}
    >{`${unitPrice} € / ${unit}`}</p>
  </div>
);

export const OutOfStockVariantItem = ({ amount, className, isSelected, unit, unitPrice }: IVariantItem) => (
  <div
    className={cns(
      'border rounded-[5px]',
      'py-[10px] px-[15px] flex flex-col gap-y-[5px]',
      'w-max relative',
      'cursor-d',
      {
        'bg-[#F2F3F4] border-[#E7E7E7]': !isSelected,
        'bg-[#F2F3F4] border-[#85939B]': isSelected
      },
      className
    )}
  >
    <p
      className={cns('text-sm tracking-[-0.15px]', {
        'text-[#BCC4CC] font-normal': !isSelected,
        'text-[#85939B] font-semibold': isSelected
      })}
    >{`${amount} ${unit}`}</p>
    <p
      className={cns('text-xs tracking-[-0.15px]', {
        'text-[#BCC4CC] font-semibold': !isSelected,
        'text-[#85939B] font-semibold': isSelected
      })}
    >{`${unitPrice} € / ${unit}`}</p>
  </div>
);

export const WithDiscountVariantItem = ({ amount, className, isSelected, unit, unitPrice }: IVariantItem) => (
  <div
    className={cns(
      'border rounded-[5px]',
      'py-[10px] px-[15px] flex flex-col gap-y-[5px]',
      'w-max relative',
      'cursor-d',
      {
        'bg-white border-[#E7E7E7]': !isSelected,
        'bg-[#EFFEF8] border-[#2EB67D]': isSelected
      },
      className
    )}
  >
    <DiscountIcon className="absolute -top-[9px] -right-[9px]" />
    <p
      className={cns('text-sm tracking-[-0.15px]', {
        'text-[#0C2638] font-normal': !isSelected,
        'text-[#0C2638] font-semibold': isSelected
      })}
    >{`${amount} ${unit}`}</p>
    <p
      className={cns('text-xs tracking-[-0.15px]', {
        'text-[#2EB67D] font-semibold': !isSelected,
        'text-[#85939B] font-semibold': isSelected
      })}
    >{`${unitPrice} € / ${unit}`}</p>
  </div>
);
