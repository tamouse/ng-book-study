# Study examples from ng-book

Angular book: ng-book: The Complete Book on Angular.JS: <https://www.ng-book.com/>

## Best Practices:

### Binding:

> “Due to the nature of JavaScript itself and how it passes by value vs. reference, it’s considered a best-practice in Angular to bind references in the views by an attribute on an object, rather than the raw object itself.” -- page 40.


### Modules / Namespacing

> “In JavaScript, placing functional code in the global namespace is rarely a good idea. It can cause collisions that are tough to debug and cost us precious development time.

> In this chapter, we’ll talk about how to write efficient, production-ready controllers by encapsulating our functionality in a single core unit called a module.

> In Angular, a module is the main way to define an AngularJS app. The module of an app is where we’ll contain all of our application code. An app can contain several modules, each one containing code that pertains to specific functionality.

> Using modules gives us a lot of advantages, such as:

> * Keeping our global namespace clean
> * Making tests easier to write and keeping them clean so as to more easily target isolated functionality
> * Making it easy to share code between applications
> * Allowing our app to load different parts of the code in any order”

-- page 50.

### Controllers

> “Using controllers allows us to contain the logic of a single view in a single container.

> It’s good practice to keep slim controllers. One way that we as AngularJS developers can do so is by using the dependency injection feature of AngularJS to access services. We’ll discuss services in-depth in the services chapter.”

