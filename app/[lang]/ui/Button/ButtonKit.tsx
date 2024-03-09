import BackSvg from './img/back.svg';
import PlusSvg from './img/plus.svg';
import { Button, LinkButton } from '.';
// import MinusIcon from './Button/img/minus.svg';

export const ButtonKit = () => {
  return (
    <section className="mt-5">
      <h2>{'Button'}</h2>

      <p className="mt-2">
        <span>{'Colors meaning '}</span>
        <b>{'variant primary / variant secondary / :disabled'}</b>
      </p>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'With text'}</h3>
        <div className="mt-3 flex gap-x-5">
          <Button>{'PRESS'}</Button>
          <Button variant="secondary">{'PRESS'}</Button>
          <Button disabled>{'PRESS'}</Button>
        </div>
      </article>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'With icon'}</h3>
        <div className="mt-3 flex gap-x-5">
          <Button>
            <PlusSvg />
          </Button>
          <Button variant="secondary">
            <PlusSvg />
          </Button>
          <Button disabled>
            <PlusSvg />
          </Button>
        </div>
      </article>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'Outlines'}</h3>
        <div className="mt-3 flex gap-x-5">
          <Button outline>{'PRESS'}</Button>
          <Button outline variant="secondary">
            {'PRESS'}
          </Button>
          <Button outline disabled>
            {'PRESS'}
          </Button>
        </div>
      </article>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'Loading'}</h3>
        <div className="mt-3 flex gap-x-5">
          <Button loading>{'PRESS'}</Button>
          <Button loading variant="secondary">
            {'PRESS'}
          </Button>
          <Button loading disabled>
            {'PRESS'}
          </Button>
        </div>
      </article>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'Loading Outlines'}</h3>
        <div className="mt-3 flex gap-x-5">
          <Button loading outline>
            {'PRESS'}
          </Button>
          <Button loading outline variant="secondary">
            {'PRESS'}
          </Button>
          <Button loading outline disabled>
            {'PRESS'}
          </Button>
        </div>
      </article>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'Block'}</h3>
        <div className="mt-3">
          <Button block>{'PRESS'}</Button>
        </div>
        <div className="mt-3">
          <Button block variant="secondary">
            {'PRESS'}
          </Button>
        </div>
      </article>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'Clean Variant'}</h3>
        <div className="mt-3 flex gap-x-5">
          <Button variant="clean">{'Press'}</Button>
          <Button variant="clean">
            <BackSvg className="w-4" />
          </Button>
        </div>
      </article>

      <article className="pl-5 mt-5">
        <h3 className="text-zinc-700 font-bold">{'Link as Button'}</h3>
        <div className="mt-3 flex gap-x-5">
          <LinkButton href="https://google.com">{'PRESS'}</LinkButton>
          <LinkButton href="https://google.com" variant="secondary">
            {'PRESS'}
          </LinkButton>
          <i>{'Links cannot be disabled'}</i>
        </div>
      </article>

      {/* <article className="pl-5 mt-5">
          <h3 className="text-zinc-700 font-bold">{'Customs'}</h3>

          <div className="mt-3">
            <DivButton variant="outline">
              <div className="flex items-center gap-x-6">
                <MinusIcon className="text-red-500" />
                <span>{'1'}</span>
                <PlusSvg className="text-red-500" />
              </div>
            </DivButton>
          </div>
          <div className="mt-3">
            <DivButton variant="outline" className="bg-white border-gray-400">
              <div className="flex items-center gap-x-6">
                <MinusIcon className="text-red-500" />
                <span>{'1'}</span>
                <PlusSvg className="text-red-500" />
              </div>
            </DivButton>
          </div>
          <div className="mt-3">
            <DivButton variant="outline" loading loadingType="spinner">
              <div className="flex items-center gap-x-6">
                <MinusIcon className="text-red-500" />
                <span>{'1'}</span>
                <PlusSvg className="text-red-500" />
              </div>
            </DivButton>
          </div>
          <div className="mt-3">
            <DivButton variant="outline">
              <div className="flex items-center gap-x-6">
                <MinusIcon className="text-white" />
                <span>{'1'}</span>
                <PlusSvg className="text-white" />
              </div>
            </DivButton>
          </div>
          <div className="mt-3">
            <DivButton block variant="outline">
              <div className="flex items-center w-full justify-between">
                <MinusIcon className="text-red-500" />
                <span>{'1'}</span>
                <PlusSvg className="text-red-500" />
              </div>
            </DivButton>
          </div>
        </article> */}
    </section>
  );
};
