import { DescriptionSection } from './sections/DescriptionSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HobbySection } from './sections/HobbySection';
import { HomeFooter } from './sections/HomeFooter';
import { HomeHeader } from './sections/HomeHeader';
import { LanguageSection } from './sections/LanguageSection';
import { SkillSection } from './sections/SkillSection';

import { education, hobbies, languages, workingExperience } from './data';
import { ImageSample } from './ImageSample';

const getData = async () => {
  return new Response(
    JSON.stringify({
      education,
      hobbies,
      languages,
      workingExperience
    })
  ).json();
};

const IndexPage = async () => {
  const data = await getData();

  return (
    <>
      {/* <ButtonHandler /> */}
      {/* <ImageSample /> */}
      <HomeHeader className="card" />
      <main>
        <DescriptionSection className="card" />
        <ExperienceSection className="card mt-px" workingExperience={data.workingExperience} />
        <SkillSection className="card mt-px" />
        <EducationSection className="card mt-px" educationList={data.education} />
        <LanguageSection className="card mt-px" languageList={data.languages} />
        <HobbySection className="card mt-px" hobbies={data.hobbies} />
      </main>
      <HomeFooter className="card mt-px" />
    </>
  );
};

export default IndexPage;
