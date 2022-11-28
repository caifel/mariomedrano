import { education, languages, workingExperience } from './data';
import { t } from './locales/en/all';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { LanguageSection } from './sections/LanguageSection';

const Page = () => {
  return (
    <>
      <div className="bg-section px-20 py-40 mt-1 mt-md-0">
        {/* add padding top and bottom of 40px for mobile, padding y, padding x is ok with 20px */}
        <p className="text-mix fw-100 fs-14 lh-1-5">
          <span>{t.description.part1}</span>
          <b>{t.description.part2}</b>
          <span>{t.description.part3}</span>
        </p>

        <p className="text-mix fw-100 fs-14 lh-1-5 mt-20">
          <span>{t.description.part4}</span>
          <b className="c-primary">{t.description.part5}</b>
          <span>{t.description.part6}</span>
        </p>
      </div>

      <ExperienceSection className="mt-1 mt-md-0 px-20 py-40 bg-section" workingExperience={workingExperience} />
      <EducationSection className="mt-1 mt-md-0 px-20 py-40 bg-section" educationList={education} />
      <LanguageSection className="mt-1 mt-md-0 px-20 py-40 bg-section" languageList={languages} />
      <section className="mt-1 mt-md-0 px-20 py-40 bg-section">
        <h2 className="fs-24">{t.section.hobbies.title}</h2>
      </section>
    </>
  );
};

export default Page;
