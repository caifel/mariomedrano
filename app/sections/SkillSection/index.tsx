import { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SkillSection: FC<IProps> = () => {
  return (
    <section className="card mt-1" id="skill-section">
      <h2>
        <a href="#skill-section">{'Skills'}</a>
      </h2>
      <article className="mt-30">
        <h3>{'Top Match'}</h3>
        <ul className="badge-container mt-20">
          {['React', 'Nextjs', 'Redux', 'Javascript', 'HTML', 'CSS', 'NodeJs', 'GIT', 'Jest', 'UX', 'Google'].map(
            (skill) => (
              <li className="badge" key={skill}>
                {skill}
              </li>
            )
          )}
        </ul>
      </article>
      <article className="mt-30">
        <h3>{'Complementary'}</h3>
        <ul className="badge-container mt-20">
          {['React Native', 'Cypress', 'Nestjs', 'Docker', 'AWS', 'Jira'].map((skill) => (
            <li className="badge" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
