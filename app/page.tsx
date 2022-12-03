import { education, hobbies, languages, workingExperience } from './data';
import { DescriptionSection } from './sections/DescriptionSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HomeFooter } from './sections/HomeFooter';
import { HomeHeader } from './sections/HomeHeader';
import { HobbySection } from './sections/HobbySection';
import { LanguageSection } from './sections/LanguageSection';

const Page = () => {
  return (
    <>
      <HomeHeader className="card" />
      <main>
        <DescriptionSection className="card mt-1" />
        <ExperienceSection className="card mt-1" workingExperience={workingExperience} />
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
        <EducationSection className="card mt-1" educationList={education} />
        <LanguageSection className="card mt-1" languageList={languages} />
        <HobbySection className="card mt-1" hobbies={hobbies} />
      </main>
      <HomeFooter className="card mt-1" />
    </>
  );
};

export default Page;
