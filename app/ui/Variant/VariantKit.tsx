import { Variant } from '.';

const variantProps = {
  amount: '100',
  unit: 'pcs',
  unitPrice: '1,5'
};

export const VariantKit = () => (
  <section className="mt-5">
    <h2>{'Variant'}</h2>

    <article className="pl-5 mt-5">
      <h3 className="text-zinc-700 font-bold">{'Basic'}</h3>
      <div className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]">
        <Variant {...variantProps} />

        <Variant {...variantProps} isSelected />
      </div>
    </article>

    <article className="pl-5 mt-5">
      <h3 className="text-zinc-700 font-bold">{'Out of stock'}</h3>
      <div className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]">
        <Variant {...variantProps} isOutOfStock />

        <Variant {...variantProps} isOutOfStock isSelected />
      </div>
    </article>

    <article className="pl-5 mt-5">
      <h3 className="text-zinc-700 font-bold">{'With discount'}</h3>
      <div className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]">
        <Variant {...variantProps} hasDiscount />

        <Variant {...variantProps} hasDiscount isSelected />
      </div>
    </article>

    <article className="pl-5 mt-5">
      <h3 className="text-zinc-700 font-bold">{'Horizontal Scroll'}</h3>
      <div
        className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]"
        // ref={(ref) => ref?.scrollTo(100, 0)}
        // id="variants-container"
      >
        {[...Array(3)].map((_, i) => (
          <Variant key={i} {...variantProps} isSelected={i === 2} />
        ))}
        {[...Array(3)].map((_, i) => (
          <Variant key={i} {...variantProps} isOutOfStock />
        ))}
        {[...Array(3)].map((_, i) => (
          <Variant key={i} {...variantProps} hasDiscount />
        ))}
      </div>
    </article>
  </section>
);
