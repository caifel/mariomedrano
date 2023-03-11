import { FC } from 'react';
import Badge from '../../ui/Badge';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SkillSection: FC<IProps> = ({ className }) => {
  return (
    <section className={className} id="skill-section">
      <h2>
        <a href="#skill-section">{'Main Skills'}</a>
      </h2>
      <article className="mt-10">
        <h3>{'Top Match'}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-6">
          {[
            'Typescript',
            'React',
            'Nextjs',
            'Redux',
            'HTML',
            'CSS',
            'NodeJs',
            'GIT',
            'Jest',
            'UX',
            'Googling'
          ].map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </article>
      <article className="mt-10">
        <h3>{'Complementary'}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-6">
          {['React Native', 'Cypress', 'Nestjs', 'Docker', 'AWS', 'Jira'].map((skill) => (
            <Badge color="secondary" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </article>
    </section>
  );
};
