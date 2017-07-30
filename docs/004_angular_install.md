# install angular 4

### Install angular cli and create new project

1. You need to have NodeJS version 6.10 or higher and npm version 3.10 or higher
2. Install the cli `npm install -g @angular/cli`
3. Verify if angular cli is installed `ng -v`
4. Create Project from the CLI `ng new FirstProject`

5. To star the project
```
// cd inside the project
ng serve --open
// 4200 is the default port
```

### Commands to create components

1. Generate a new component
`ng generate component my-component`

    ** This command will create a folder my-component in the app directory
    ** app-component is the parent, and all other components that we create will be the child component
    ** We can fetch the date of our child component and show it within the template of our parent component.

2. For other components
`ng generate directive|pipe|service|class|module`

3. Build the project
`ng build`
    ** The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

4. Running unit tests
`ng test`
    ** will run the unit tests via `karma`

`ng e2e`
    ** Will run the end to end test via `protractor`
    ** Before running the tests, make sure you are serving the app via `ng serve`
