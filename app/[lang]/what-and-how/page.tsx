import { i18n } from '@modules/i18n/i18n';
import Link from 'next/link';
import CheckMarkIcon from '../images/check-mark.svg';
import HeaderBackIcon from '../images/header-back.svg';
import Badge from '../ui/Badge';
import { Space } from '../ui/Space';

const Page = () => {
  const locale = i18n.getLocale();

  return (
    <main className="blog-page">
      <header className="h-24 relative flex items-center bg-white dark:bg-zinc-900">
        <Link href={`/${locale}`} aria-label="back" className="absolute top-9 left-8 z-10">
          <HeaderBackIcon className="w-6 text-red-500 dark:text-yellow-400" />
        </Link>
        <h1 className="text-center flex-1">{'Why, What & how?'}</h1>
      </header>
      <article className="card mt-px">
        <h2>{'The Why'}</h2>
        <p className="mt-6">
          <span>
            {
              'To be truthful by doing what I do I have the feeling of actively shaping the world. And that idea even if it is a bit naive, it is priceless.'
            }
          </span>
        </p>
        <p className="mt-6">
          <span>
            {
              'As well I consider Software Development to be similar to chess and philosophy, it is a never ending journey of learning and improving.'
            }
          </span>
          <span className="text-red-500 dark:text-yellow-400">
            {' Call me romantic but I find it to be similar to life.'}
          </span>
        </p>
      </article>
      <article className="card mt-px">
        <h2>{'The What'}</h2>
        <p className="mt-6">
          <span>{'So far during this journey I have implemented a variety of features such as:'}</span>
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-6">
          <Badge color="secondary">{'CRUD'}</Badge>
          <Badge color="secondary">{'Search'}</Badge>
          <Badge color="secondary">{'Checkouts'}</Badge>
          <Badge color="secondary">{'SEO'}</Badge>
          <Badge color="secondary">{'Authentication'}</Badge>
          <Badge color="secondary">{'Accessibility WCAG'}</Badge>
        </div>
        <p className="mt-6">
          <span>{'And actively participated in:'}</span>
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-6">
          <Badge>{'Setting up projects'}</Badge>
          <Badge>{'Defining architecture'}</Badge>
          <Badge>{'Code Reviews'}</Badge>
          <Badge>{'Plannings'}</Badge>
          <Badge>{'Pair Programming'}</Badge>
          <Badge>{'Improving UI/UX/DX'}</Badge>
          <Badge>{'Documentations'}</Badge>
        </div>
      </article>
      <article className="card mt-px pb-16">
        <h2>The How</h2>
        <p className="mt-6">
          <span>
            {
              'Time has passed and with it my ways. Today I control that rush of excitement before starting coding and instead I begin by communicating with others and with myself.'
            }
          </span>
        </p>
        <p className="mt-6">
          <span>{'I feel a certain joy about writing things down before starting a task.'}</span>
        </p>
        <ul className="mt-6">
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'Pay attention to details'}</span>
          </li>
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'Clarify requirements'}</span>
          </li>
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'Identify dependencies'}</span>
          </li>
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'Identify edge cases'}</span>
          </li>
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'Decompose in smaller tasks'}</span>
          </li>
        </ul>
        <p className="mt-6">
          <span>{'Once I put my hands to work I consider a personal challenge to end up with a good and'}</span>
          <span className="text-red-500 dark:text-yellow-400">{' performant'}</span>
          <span>{' solution.'}</span>
        </p>
        <ul className="mt-6">
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'DX (Developer Experience)'}</span>
            <Space />
            <i>{'- Clean code'}</i>
          </li>
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'UX (User Experience)'}</span>
          </li>
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'UI (User Interface)'}</span>
          </li>
        </ul>
        <p className="mt-6">
          <span>
            {'And if the team strategy considers as a good investment of time to make the code bullet proof then:'}
          </span>
        </p>
        <ul className="mt-6">
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'Unit testing'}</span>
          </li>
          <li className="flex items-center">
            <CheckMarkIcon className="text-red-500 dark:text-yellow-400 w-6" />
            <span className="ml-2.5">{'E2E testing'}</span>
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Page;
