import { List } from './List';
import { Randomizer } from './Randomizer';

const IndexPage = () => {
  return (
    <>
      <main>
        <Randomizer speed={1000} />
        <List />
      </main>
    </>
  );
};

export default IndexPage;
