# ToDoListAngular
This is an Angular application which allows you to work with notes.

<p float="left">
  <img src="/art/app-demo.png" />
</p>

## Features:
* Add a note (text, label, status)
* Delete note
* Mark note as completed

## Frameworks and Tools
* TypeScript
* Angular 8
* RxJs
* nanoid
* json-server

## Configuration
This project use `json-server` dependency which allows us to interact with `data/db.json` file.
We can run it: `json-server --watch data/db.json`. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
