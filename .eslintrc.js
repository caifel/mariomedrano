const prettierrc = require('./.prettierrc.json');

const baseRules = {
  'no-debugger': 'off',
};

const cssModulesRules = {
  'css-modules/no-undef-class': 'off',
  'css-modules/no-unused-class': 'off',
};

const reactRules = {
  'react/display-name': 'off',
  'react/no-children-prop': 'off',
  'react-hooks/rules-of-hooks': 'off',
  'react-hooks/exhaustive-deps': 'off',
};

const prettierRules = {
  'prettier/prettier': ['error', prettierrc],
};

// Typescript
const tsRules = {
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-redeclare': ['error'],
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'as' },
  ],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'off',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  // '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-namespace': 'off',
};

// Import
const importRules = {
  'import/no-unresolved': ['error', { ignore: ['.svg'] }],
  'import/no-dynamic-require': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
  'import/no-duplicates': 'error',
  'import/extensions': 'off',
  'import/export': 'error',
  'import/newline-after-import': 'error',
  'import/first': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-cycle': 'error',
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'type'],
      pathGroups: [
        { pattern: 'react', group: 'external', position: 'before' },
        { pattern: 'react-dom/**', group: 'external', position: 'before' },
        { pattern: 'next/**', group: 'external', position: 'before' },
        { pattern: '@apollo/**', group: 'external', position: 'before' },
        {
          pattern: 'react-bootstrap/**',
          group: 'external',
          position: 'before',
        },
        { pattern: './**.scss', group: 'sibling', position: 'after' },
      ],
      pathGroupsExcludedImportTypes: ['react', 'react-dom/server'],
      alphabetize: {
        order: 'asc',
      },
    },
  ],
};

const basePlugins = ['prettier', 'react', 'import', 'css-modules', 'cypress'];

const baseExtends = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:css-modules/recommended',
  'prettier',
  'eslint-config-next',
];

const createOverrides = ({ isTS }) => {
  const rules = {
    ...baseRules,
    ...prettierRules,
    ...importRules,
    ...reactRules,
    ...cssModulesRules,
  };

  return {
    files: isTS
      ? ['next-env.d.ts', '**/*.ts', '**/*.tsx', '**/*.d.ts']
      : ['**/*.js', '**/*.jsx', '**/*.json'],
    env: isTS ? { browser: true, es6: true } : { browser: true, node: true },
    plugins: isTS ? [...basePlugins, '@typescript-eslint'] : basePlugins,
    extends: isTS
      ? [
          ...baseExtends,
          'plugin:import/typescript',
          'plugin:@typescript-eslint/eslint-recommended',
          'plugin:@typescript-eslint/recommended',
        ]
      : baseExtends,
    parser: isTS ? '@typescript-eslint/parser' : undefined,
    parserOptions: isTS
      ? {
          ecmaFeatures: { jsx: true },
          ecmaVersion: 2020,
          sourceType: 'module',
          project: './tsconfig.json',
        }
      : undefined,
    rules: isTS
      ? {
          ...rules,
          ...tsRules,
        }
      : rules,
    settings: {
      'import/resolver': {
        node: { paths: ['src', 'cypress'] },
      },
      next: {
        rootDir: 'src',
      },
    },
  };
};

module.exports = {
  overrides: [
    createOverrides({ isTS: false }),
    createOverrides({ isTS: true }),
  ],
};
