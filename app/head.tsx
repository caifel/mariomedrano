import { personalInfo } from './data';

const Head = () => {
  return (
    <>
      <title>{`${personalInfo.name} (${personalInfo.alias})`}</title>
      <meta name="description" content={personalInfo.description} />
      <meta name="keywords" content={personalInfo.keywords.join(',')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
