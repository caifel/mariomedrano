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
    <main>
      <HomeHeader className="card" />
      <DescriptionSection className="card mt-1" />
      <ExperienceSection className="card mt-1" workingExperience={workingExperience} />
      <EducationSection className="card mt-1" educationList={education} />
      <LanguageSection className="card mt-1" languageList={languages} />
      <HobbySection className="card mt-1" hobbies={hobbies} />
      <HomeFooter className="card mt-1" />
    </main>
  );
};

export default Page;
