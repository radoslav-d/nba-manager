# NbaManager

<h1>Welcome!</h1>

<p>
  My name is Radoslav and I am a student at Technical University of Sofia.
  I am forth year student in 'Computer and Software engineering' and this application is a course assignment for 'Distributed Environment Programming'.
</p>

<h4>
  About the application:
</h4>
<p>
  This application is an Angular based web client for balldontlie.io open API.
  The application uses Angular HttpModule and consumes the following APIs:
</p>
<div>
  GET /players
</div>
<div>
  GET /players/:id
</div>
<div>
  GET /teams
</div>
<div>
  GET /teams/:id
</div>
<div>
  GET /games
</div>
<div>
  GET /games/:id
</div>
<div>
  GET /stats
</div>
<div>
  GET /season_averages
</div>
<p>
  The application compiles SCSS styles. Bootstrap 4 library is used for additional styling - buttons, inputs, tables, navigation and etc.
  There is implemented navigation component using Angular Router. Some of the components (for players and games) implement paging functionality.
  Going through pages triggers rest calls to the API, which support pagination.
  The user can track different information regarding NBA league. Possible options are:
</p>
<ul>
  <li>view teams</li>
  <li>search players</li>
  <li>view players stats for different seasons</li>
  <li>view finished and ongoing games</li>
</ul>
<p>
  The Angular application is finally deployed to Cloud Foundry via MTA deployment.
  Additional bash script is added, which installs the dependencies, builds the angular project to static files and performs MTA deployment.
</p>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
