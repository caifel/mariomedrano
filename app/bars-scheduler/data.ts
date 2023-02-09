export const tasks: TTask[] = [
  {
    id: '1',
    name: 'Update queries',
    percent: 0,
    size: 10
  },
  {
    id: '2',
    name: 'Refactor Product Box',
    percent: 50,
    size: 15
    // status: 'unit-testing',
  },
  {
    id: '77',
    name: 'Apply Product Card and Review',
    percent: 0,
    size: 15,
    dependencies: ['2']
  },
  {
    id: '3',
    name: 'Update Segment Events',
    percent: 0,
    size: 10,
    dependencies: ['1', '2']
  },
  {
    id: '5',
    name: 'Bug Fixing',
    percent: 0,
    size: 5,
    dependencies: ['77']
  },
  {
    id: '6',
    name: 'Write test cases',
    percent: 0,
    size: 7,
    dependencies: ['77']
  },
  {
    id: '7',
    name: 'Add documentation',
    percent: 0,
    size: 5,
    dependencies: ['77']
  },

  {
    id: '8',
    name: 'Update PDP data',
    percent: 0,
    size: 5
  },
  {
    id: '9',
    name: 'Update PDP variant selector component',
    percent: 0,
    size: 10,
    dependencies: ['8']
  },
  {
    id: '10',
    name: 'Update PDP right panel component',
    percent: 0,
    size: 7
  }
];
