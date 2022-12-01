import { education, hobbies, languages, workingExperience } from './data';
import { t } from './locales/en/all';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HobbySection } from './sections/HobbySection';
import { LanguageSection } from './sections/LanguageSection';
import { Space } from './ui/Space';

const Page = () => {
  return (
    <>
      <div className="h3 bg-section px-20 py-40 mt-1 mt-md-0">
        <p className="lh-2">
          <span>{t.description.part1}</span>
          <Space />
          <b className="c-primary">{t.description.part2}</b>
          <Space />
          <span>{t.description.part3}</span>
        </p>

        <p className="lh-2 mt-20">
          <span>{t.description.part4}</span>
          <Space />
          <b className="c-primary">{t.description.part5}</b>
          <Space />
          <span>{t.description.part6}</span>
        </p>
      </div>

      <ExperienceSection className="bg-section px-20 py-40 mt-1 mt-md-0" workingExperience={workingExperience} />
      <EducationSection className="bg-section px-20 py-40 mt-1 mt-md-0" educationList={education} />
      <LanguageSection className="bg-section px-20 py-40 mt-1 mt-md-0" languageList={languages} />
      <HobbySection className="bg-section px-20 py-40 mt-1 mt-md-0" hobbies={hobbies} />
    </>
  );
};

export default Page;
