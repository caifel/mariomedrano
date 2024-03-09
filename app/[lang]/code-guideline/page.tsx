import Image from 'next/image';
import cns from 'classnames';

type TCardProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;
const Card = ({ title, className }: TCardProps) => {
  return (
    <div
      className={cns(
        {
          'w-full': true,
          'p-10 pb-15': true,
          'transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl':
            true,
        },
        className,
      )}
    >
      <h3 className="text-3xl">{title}</h3>
      <p className="mt-5 text-lg">
        <span>{'El ańo'}</span>
        &nbsp;
        <span className="text-red-400">{'2003'}</span>
        &nbsp;
        <span>
          {
            'en Bolivia dió inicio un profundo cambio. Si fue para bien o para mal aún no está claro'
          }
        </span>
      </p>
      <img
        width="400"
        // height="400"
        className="mt-10"
        src="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/e2a1f768-3ec4-413f-8d19-72cbb5bf5364"
      />{' '}
      <img
        width="400"
        // height="400"
        className="mt-10"
        src="https://media.discordapp.net/attachments/1008571040097632317/1079550947551883355/Caifel_abstract_shaman_old_man_flying_next_to_dragons_d3bde431-b113-4934-881c-220fe7496fa8.png?width=936&height=936"
      />
    </div>
  );
};
// --------------------------------
// PAGE
// --------------------------------
const Page = () => {
  return (
    <>
      <main className="py-40 px-5">
        <Card
          title="El reinicio"
          className="border-white bg-zinc-900 text-white m-auto"
        />
      </main>
    </>
  );
};

export default Page;
