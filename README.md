# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite along with basic auth handling.
It comes with a Global AuthProvider and a custom hook to handle sign-in/sign-out and handle token store in the browser localStorage.

Folder Structure:
```bash
├─public
└─src
    ├──assets
    ├──components
    │  └──requireAuth
    ├──styles
    ├──providers
    ├──hooks
    ├──pages
    │   └──signIn
    └──utils
```

To install the required dependencies, run:

```bash
npm install
```

To run the Application in development mode, run the following command:

```bash
npm run dev
```

To build the Application for production, use the following command:

```bash
npm run build
```
 
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
