import Link from 'next/link';
import CheckMarkIcon from '../images/check-mark.svg';
import HeaderBackIcon from '../images/header-back.svg';
import { Space } from '../ui/Space';

const Page = () => {
  return (
    <main className="blog-page">
      <header className="header-container">
        <Link href="/" aria-label="back">
          <HeaderBackIcon className="left-icon c-primary" />
        </Link>
        <h1>{'Why, What & how?'}</h1>
      </header>
      <article className="card mt-10">
        <h2>{'The Why'}</h2>
        <p className="lh-2 mt-20">
          <span>
            {
              'To be truthful by doing what I do I have the feeling of actively shaping the world. And that idea even if it is a bit naive, it is priceless.'
            }
          </span>
        </p>
        <p className="lh-2 mt-20">
          <span>
            {
              'As well I consider Software Development to be similar to chess and philosophy, it is a never ending journey of learning and improving.'
            }
          </span>
          <span className="c-primary">{' Call me romantic but I find it to be similar to life.'}</span>
        </p>
      </article>
      <article className="card mt-1">
        <h2>{'The What'}</h2>
        <p className="lh-2 mt-20">
          <span>{'So far during this journey I have implemented a variety of features such as:'}</span>
        </p>
        <ul className="badge-container mt-20">
          <li className="badge">{'CRUDS'}</li>
          <li className="badge">{'Search'}</li>
          <li className="badge">{'Checkouts'}</li>
          <li className="badge">{'SEO'}</li>
          <li className="badge">{'Authentication'}</li>
          <li className="badge">{'Accessibility WCAG'}</li>
        </ul>
        <p className="lh-2 mt-20">
          <span>{'And actively participated in:'}</span>
        </p>
        <ul className="badge-container mt-20">
          <li className="badge-primary">{'Setting up projects'}</li>
          <li className="badge-primary">{'Defining architecture'}</li>
          <li className="badge-primary">{'Code Reviews'}</li>
          <li className="badge-primary">{'Plannings'}</li>
          <li className="badge-primary">{'Improving UI/UX/DX'}</li>
          <li className="badge-primary">{'Documentations'}</li>
        </ul>
      </article>
      <article className="card mt-1 last-card">
        <h2>The How</h2>
        <p className="lh-2 mt-20">
          <span>
            {
              'Time has passed and with it my ways. Today I control that rush of excitement before starting coding and instead I begin by communicating with others and with myself.'
            }
          </span>
        </p>
        <p className="lh-2 mt-20">
          <span>{'I feel a certain joy about writing things down before starting a task.'}</span>
        </p>
        <ul className="mt-20 lh-2">
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'Pay attention to details'}</span>
          </li>
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'Clarify requirements'}</span>
          </li>
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'Identify dependencies'}</span>
          </li>
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'Identify edge cases'}</span>
          </li>
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'Decompose in smaller tasks'}</span>
          </li>
        </ul>
        <p className="lh-2 mt-20">
          <span>{'Once I put my hands to work I consider a personal challenge to end up with a good and'}</span>
          <span className="c-primary">{' performant'}</span>
          <span>{' solution.'}</span>
        </p>
        <ul className="mt-20 lh-2">
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'DX (Developer Experience)'}</span>
            <Space />
            <i>{'- Clean code'}</i>
          </li>
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'UX (User Experience)'}</span>
          </li>
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'UI (User Interface)'}</span>
          </li>
        </ul>
        <p className="lh-2 mt-20">
          <span>
            {'And if the team strategy considers as a good investment of time to make the code bullet proof then:'}
          </span>
        </p>
        <ul className="mt-20 lh-2">
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'Unit testing'}</span>
          </li>
          <li className="align-items-center">
            <CheckMarkIcon className="c-primary" width="1.5rem" />
            <span className="ml-10">{'E2E testing'}</span>
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Page;
