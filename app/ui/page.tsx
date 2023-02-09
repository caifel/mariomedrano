import Link from 'next/link';
import { Variant } from './Variant';

const VARIANT = {
  amount: '100',
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
          <div className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]">
            <Link href="/">
              <Variant {...VARIANT} />
            </Link>
            <Link href="/">
              <Variant {...VARIANT} isSelected />
            </Link>
          </div>
        </article>

        <article className="mt-5">
          <h3 className="text-zinc-500 font-bold">{'Out of stock'}</h3>
          <div className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]">
            <Link href="/">
              <Variant {...VARIANT} isOutOfStock />
            </Link>
            <Link href="/">
              <Variant {...VARIANT} isOutOfStock isSelected />
            </Link>
          </div>
        </article>

        <article className="mt-5">
          <h3 className="text-zinc-500 font-bold">{'With discount'}</h3>
          <div className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]">
            <Link href="/">
              <Variant {...VARIANT} hasDiscount />
            </Link>
            <Link href="/">
              <Variant {...VARIANT} hasDiscount isSelected />
            </Link>
          </div>
        </article>

        <article className="mt-5">
          <h3 className="text-zinc-500 font-bold">{'Horizontal Scroll'}</h3>
          <div
            className="flex gap-x-5 mt-3 overflow-x-auto py-[10px]"
            // ref={(ref) => ref?.scrollTo(100, 0)}
            id="variants-container"
          >
            {[...Array(3)].map((_, i) => (
              <Link key={i} href="/">
                {/* If selected, then access ref and scroll to "variants-container" */}
                <Variant {...VARIANT} isSelected={i === 2} />
              </Link>
            ))}
            {[...Array(3)].map((_, i) => (
              <Link key={i} href="/">
                <Variant {...VARIANT} isOutOfStock />
              </Link>
            ))}
            {[...Array(3)].map((_, i) => (
              <Link key={i} href="/">
                <Variant {...VARIANT} hasDiscount />
              </Link>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Page;
