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

const Page = () => (
  <>
    <HomeHeader className="card" />
    <main>
      <DescriptionSection className="card" />
      <ExperienceSection className="card mt-1" workingExperience={workingExperience} />
      <SkillSection className="card mt-1" />
      <EducationSection className="card mt-1" educationList={education} />
      <LanguageSection className="card mt-1" languageList={languages} />
      <HobbySection className="card mt-1" hobbies={hobbies} />
    </main>
    <HomeFooter className="card mt-1" />
  </>
);

export default Page;
