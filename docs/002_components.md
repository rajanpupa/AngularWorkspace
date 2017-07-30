# components

* Components are the sections of UI can be broken up into encapsulated components

    * eg, navbar component, blog post component, sidebar component
    * anything that is in the UI

* Basic building block of an angular application. Angular app is a tree of angular components

* core app component. Every angular application has one
```
import {Component} from '@angular/core`

// this is the decorator
@Component({
    selector: 'my-app',
    template : `<h1>Hello {{name}} </h1>`,
})

export class  AppComponent{
    name = 'Angular';
}

```
The body would be like this 
```
<body>
    <my-app>Loading AppComponent content here ...</my-app>
</body>
```

* Decorator allows us to mark a class as an Angular Component & provide metadata that determines how the component should be processed, initialized and used at runtime.

    ** selector         (defines the tag to be used in html to embede this component)
    ** template, templateUrl
    ** styleUrls
    ** providers

