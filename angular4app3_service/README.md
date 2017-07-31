# Angular | service example

* to generate service
`ng g service services/data`

* import it to app.module
* add the service in providers array of app.module

* now import the service in the component that you want to use the service

* To import http module in the service to fetch from a url, do the following

* import http module in the app.module
```
import { HttpModule } from '@angular/http'

// also declare it to the imports
imports: [
    HttpModule
]
```

* now go the service and import the same and use it

So basically, import the http modules in the service and call the url to get the data.
The method returns an observable, which you have to subscribe and wait until the data is available.

* to inject the service into a component, you have do declare it in the constructor.

### router
* import the router module
```
import { RouterModule, Routes } from '@angular/router';

```

In this project, i have created a separate file `app.routing.module.ts` to define my routes
and then imported this file in `app.module.ts`

In the component, `articles.component.ts`, it has a method which is called when the element is clicked in its view. 
This method routes to the detail view of the article.
```
showDetail(post:Post){
    this.router.navigate(['/detail', post.id]);
  }
```

The id is passed to the `article.component.ts`
in the onInit method, it calls the service with the passed id to get the object to view the detail.

### to use bootstrap and fontawesome
* add the dependencies
`npm install --save bootstrap font-awesome`

* add the two lines to the src/styles.css file to load the files
```
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.css";
```



### References

[Bootstrap addition](https://medium.com/@beeman/tutorial-add-bootstrap-to-angular-cli-apps-b0a652f2eb2)
[Youtube video](https://youtu.be/KhzGSHNhnbI?t=2853)