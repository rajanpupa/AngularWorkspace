# Angular project | files

a. package.json
 * has name of the app, version
 * also has the commands `ng serve`
 * all the dependencies
 ```
 "dependencies": {
    "@angular/animations": "^4.0.0",
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.1.0",
    "zone.js": "^0.8.4"
  },
 ```
b. .angular-cli.json
    * info about output directories, load scripts,styles
c. src folder
    * has the app folder

    1. app.module.ts

    ** Meeting place for everything in your app
    ** Components, your services, your modules, everything needs to be imported into this file and added to ngModule directive
    ** different thing goes in a different array inside @NgModule 

    2. All other files inside app folder are related to component.
    * ts file is the main component file
    * spec.ts file is for testing
    * html is the template
    * css is the style of the component