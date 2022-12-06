// {
//   "root": true,
//     "ignorePatterns": [
//       "**/*"
//     ],
//       "plugins": [
//         "@nrwl/nx"
//       ],
//         "overrides": [
//           {
//             "files": [
//               "*.ts",
//               "*.tsx"
//             ],
//             "extends": [
//               "plugin:@nrwl/nx/typescript"
//             ],
//             "rules": {}
//           },
//           {
//             "files": [
//               "*.js",
//               "*.jsx"
//             ],
//             "extends": [
//               "plugin:@nrwl/nx/javascript"
//             ],
//             "rules": {}
//           },
//           {
//             "files": [
//               "*.spec.ts",
//               "*.spec.tsx",
//               "*.spec.js",
//               "*.spec.jsx"
//             ],
//             "env": {
//               "jest": true
//             },
//             "rules": {}
//           },
//           {
//             "files": [
//               "*.ts",
//               "*.tsx",
//               "*.js",
//               "*.jsx"
//             ],
//             "rules": {
//               "no-restricted-imports": "off",
//               "@typescript-eslint/no-restricted-imports": [
//                 "error",
//                 {
//                   "name": "react-redux",
//                   "importNames": [
//                     "useSelector",
//                     "useDispatch"
//                   ],
//                   "message": "Use typed hooks `useAppDispatch` and `useAppSelector` instead."
//                 }
//               ],
//               "@nrwl/nx/enforce-module-boundaries": [
//                 "error",
//                 {
//                   "enforceBuildableLibDependency": true,
//                   "allow": [],
//                   "depConstraints": [
//                     {
//                       "sourceTag": "*",
//                       "onlyDependOnLibsWithTags": [
//                         "*"
//                       ]
//                     }
//                   ]
//                 }
//               ]
//             }
//           },
//           {
//             "files": [
//               "*.ts"
//             ],
//             "rules": {
//               "indent": [
//                 "error",
//                 2
//               ],
//               "semi": "error",
//               "quotes": [
//                 "error",
//                 "single"
//               ],
//               "object-curly-spacing": [
//                 "error",
//                 "always"
//               ],
//               "object-property-newline": "error",
//               "array-element-newline": [
//                 "error",
//                 "always"
//               ]
//             }
//           }
//         ]
// }

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    quotes: ['error', 'single'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
