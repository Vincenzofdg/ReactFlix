## Description:
Project developed movies and tv shows trailers where user can search his favorite movie, or tv show, and watch it's trailer.

- [API The Movie DB Doc](https://developer.themoviedb.org/docs/append-to-response).

## Starting Project:
1. Cloning the repository
-  `git clone git@github.com:Vincenzofdg/ReactFlix.git`
2. Enter in the directory folder
- `cd ReactFlix`
3. Install projects dependencies
- `npm install` or `npm ci`
4. Starting localy
- Node Version 18: `npm start`

## Dependencies Used:
1. Styled Components (_npm install styled-components_);
2. React Router (_npm install react-router-dom_);
3. Axios (_npm install axios_).

## Deploy With GitHub Actions:
1. Create the build.yml file: `github/workflows/build.yml`;
2. Add on packge.json: `"homepage": "https://vincenzofdg.github.io/ReactFlix/"`;
3. <details>
    <summary>Content of build.yml:</summary>

    ```
    name: Github Pages Deploy

    on:
      push:
        branches:
          - master

    jobs:
      deploy:
        runs-on: ubuntu-latest

        permissions:
          contents: write

        strategy:
          matrix:
            node-version: [16.x]

        steps:
          - name: Checkout 
            uses: actions/checkout@v2

          - name: Install and Build
            run: npm install && npm run build

          - name: Deploy
            uses: JamesIves/github-pages-deploy-action@4.1.1
            with:
              branch: gh-pages
              folder: build
    ```

  </details>

<br />

![image](preview.gif)