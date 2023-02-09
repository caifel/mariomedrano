import Link from 'next/link';
import { OutOfStockVariantItem, VariantItem, WithDiscountVariantItem } from './VariantItem';

const VARIANT = {
  amount: 100,
  unit: 'pcs',
  unitPrice: '1,5'
};

const Page = () => {
  return (
    <main className="p-5 max-w-none w-screen h-screen bg-white text-zinc-800">
      <h1>{'UI Page'}</h1>
      <section className="mt-5">
        <h2>{'Variant Link'}</h2>

        <article className="mt-5">
          <h3 className="text-zinc-500 font-bold">{'Basic'}</h3>
          <div className="flex gap-x-5 mt-3">
            <Link href="/">
              <VariantItem {...VARIANT} />
            </Link>
            <Link href="/">
              <VariantItem {...VARIANT} isSelected />
            </Link>
          </div>
        </article>

        <article className="mt-5">
          <h3 className="text-zinc-500 font-bold">{'Out of stock'}</h3>
          <div className="flex gap-x-5 mt-3">
            <Link href="/">
              <OutOfStockVariantItem {...VARIANT} />
            </Link>
            <Link href="/">
              <OutOfStockVariantItem {...VARIANT} isSelected />
            </Link>
          </div>
        </article>

        <article className="mt-5">
          <h3 className="text-zinc-500 font-bold">{'With discount'}</h3>
          <div className="flex gap-x-5 mt-3">
            <Link href="/">
              <WithDiscountVariantItem {...VARIANT} />
            </Link>
            <Link href="/">
              <WithDiscountVariantItem {...VARIANT} isSelected />
            </Link>
          </div>
        </article>

        <article className="mt-5">
          <h3 className="text-zinc-500 font-bold">{'Horizontal Scroll'}</h3>
          <div className="flex gap-x-5 mt-3 overflow-x-auto pb-4">
            {[...Array(10)].map((_, i) => (
              <Link key={i} href="/">
                <VariantItem {...VARIANT} />
              </Link>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Page;
