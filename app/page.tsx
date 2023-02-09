import React from 'react';

import { DescriptionSection } from './sections/DescriptionSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HomeFooter } from './sections/HomeFooter';
import { HomeHeader } from './sections/HomeHeader';
import { HobbySection } from './sections/HobbySection';
import { LanguageSection } from './sections/LanguageSection';
import { SkillSection } from './sections/SkillSection';

import { education, hobbies, languages, workingExperience } from './data';

const Page = () => {
  return (
    <>
      <HomeHeader className="card" />
      <main>
        <DescriptionSection className="card" />
        <ExperienceSection className="card mt-px" workingExperience={workingExperience} />
        <SkillSection className="card mt-px" />
        <EducationSection className="card mt-px" educationList={education} />
        <LanguageSection className="card mt-px" languageList={languages} />
        <HobbySection className="card mt-px" hobbies={hobbies} />
      </main>
      <HomeFooter className="card mt-px" />
    </>
  );
};

export default Page;
