# What is TypeScript?


* Superset of Javascript with added features

* Created by Microsoft

* Optional static typing (type of variables)

* Class based object-oriented Programming.

* Resembles language like java c#

```
class Greeter{
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("World");

let button = document.createElement("button");
button.textContent = "say Hello";
button.onClick = function(){
    alert(greeter.greet());
}

document.body.appendChild(button);
```