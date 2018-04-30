# GrvUiComponents Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Steps to build and release:

1) git add <files>
2) npm run commit : This uses commitizen to create commits angular style.
3) Once you are happy wth the changes in master branch then execute th below steps
4) You can run the either of the below steps(a/b/c) to release a new version into GIT/NPM. Each has its own benefits and style of consume the library.

##### Publish the entire repo to GIT and NPM. This will publish entire source code to NPM and GIT with version.
a) npm run semantic-release


##### Semantic release to GIT repo only . This will publish entire source code to GIT with version.
b) npm run corp-release
This step does everything except publishing to NPM.
It also executes the linting + unit test cases before publishing to GIT.
Please refer to https://github.com/leonardoanalista/corp-semantic-release for more options.
For using this as NPM module 
Add the module as dependency to your package.json wth the git tag / version.
 "grv-ui-components": "https://github.com/pbhagchandani/grv-ui-components.git#v1.0.0"


##### Publish only the build package and not th entire repo to NPM
ng-packagr is a node library that can compile and package a TypeScript library to Angular Package Format.

c) npm run packagr

This step produces the library all compiled into dist folder. 

This can now be published into NPM as a module.
npm publish dist







