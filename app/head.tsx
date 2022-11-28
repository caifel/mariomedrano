import { personalInfo } from './data';

const Head = () => {
  return (
    <>
      <title>{personalInfo.name}</title>
      <meta name="description" content={personalInfo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
