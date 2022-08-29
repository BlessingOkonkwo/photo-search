# PhotoSearch

This is a simple Angular project that allows you lookup photos using the Flickr API.

More information about Flickr API: https://www.flickr.com/services/api/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

> Live demo [_here_](https://flickr-photo-finder.netlify.app/).


## Table of Contents
* [Development server](#development-server)
* [Code scaffolding](#code-scaffolding)
* [Build](#build)
* [Running unit tests](#running-unit-tests)
* [Running ene-to-end tests](#running-end-to-end-tests)
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)
* [Further help](#further-help)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## General Information

The application utilizes a free text search. Photos who's title, description or tags contain the text will be returned and displayed in a grid system. On display of images, users can click on an image to see a fullscreen display of the image appended to some of the image details.
The project queries Flickr's public facing API for image data. Flickr hosts a fairly large amount of pics that are in the public domain. As you make queries on the page, the photos are posted asyncronously as the page doesnt need to reload, it is just the gallery component that is getting refreshed.

## Technologies Used

This project is created with (including 3rd Party Libraries):
- bootstrap - version 5.2.0
    Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based desig templates for typography, forms, buttons, navigation, and other interface components.
    In this project, bootstrap is used to style the positions of the page components using the bootstarp grid system. It is used to style the form, submit button and the photo gallery display arrangement in a responsive format. 
- bootstrap-icons - version 1.9.1
    Bootstrap icons is a growing library of SVG icons that are simple, agile, and designed with CSS. These icons can easily be placed in HTML file to describe the given code.
    In this project, bootstrap icons is used to add the search icon and style the search button. 
- ngx-infinite-scroll - version 14.0.0
    This is used used to load a huge amount of data as you scroll down the page without degrading the grid performance. 
    In this project, it was used to listen to the window scroll event and invokes the callback and loads more pictures into the window. 
- sweetalert2 - version 11.4.29
    SweetAlert2 is a method used to create customizable and responsive popup boxes. It is a method to customize alert messages in applications, websites and games.
    In this project, SweetAlert is used to create and customize an alert popup message/dialog box to the user once a search value that returns no results from Flickr is searched. It asks the user to try another search value.

## Features

The ready features include:
- Photo search capability
- Infinite scroll
- Fullscreen modal display of image and its details on click

<!-- ## Screenshots

![Example screenshot](assets/images/image1.png)  -->

## Setup

### Project Requirements 
This project requires you to have the following installed and setup on your computer:
- A code editor such as Visual Studio Code
- Node Package Manager (npm) 
    It is an online registry/repository of opensource and free libraries and packages. It contains many JavaScript packages such as Angular, TypeScript, and Bootstrap, which is  web styling framework. npm is a command-line utility for interacting with that repository.
- Angular CLI
    This is the comman line interface for Angular,used to generate code, execute our application and deloy yo production and much more
- TypeScript 
    This is the language used with Angular. It is a superset of JavaScript
Refer to the package.json for the list of packages required

### Get Started
-  Install npm by installing Node using this link: https://nodejs.org/en/download. Check your installed npm version by running 'npm -v' in your command prompt.
- Install the Angular CLI globally by running 'npm install -g @angular/cli' in your command prompt.
- Clone the repo
- install the npm packages described in the package.json and verify that it works:
    npm install
    npm start 
- Start the app:
    ng serve

## Room for Improvement

Room for improvement:
- The overall UI design and responsiveness

To do:
- Better responsive UI and animations

## Build Process

- First I created a new angular project using the angular CLI by typing 'ng new photo-search'
- I created a Flickr account and got my API key. I set the key inside environment/environment.ts file from where it will be retrieved when needed.
- I installed bootstrap to simplify the application styling and added the full path of the bootstrap css to the styles array in the angular.json file.
- Ran ng serve to check that the app is compiling and running.
- Ran ng generate to create the search-photos component where my view and page logic is built
- Constructed the html template using bootstrap styling and reactive forms to collect user input
- Created a service to connect to the Flickr API and added the necessary imports such as HTTPClient and HttpClientModule into the service and the app module
- Went through the Flickr API documentation. I used flickr.photos.search API to return a list of photos matching the search criteria and I used the flickr.photos.getInfo API to return the details of a single image when it is clicked. I created a couple of interfaces and classes in order to be able to parse the output.
- Created the functions in the service that calls the APIs and used the REST request format based on the API documentation.
- Constructed photo url template for the output tags using the specified template from flickr documentation to be able to show the photos on the page.
- Injected the Flickr service in the typescript file
- Created the search fucntion that is invoked from the html input tag that will take the input keyword and invoke the service function with it.
- Implemented the infinite scroll by installing and using the ngx-infinite scroll package after going through the documentation and how to use it. Imported the module in the app module file. Created a function that will call the flickr service and concatenate the results, inserted the template div in the component html, and updated the flickr service with a page parameter to load the next batch of photos. 
- Created functions to display full image and details from the GetInfo API when the image is clicked and display the image and its details in a fullscreen scrollable modal
- Lastly I applied some custom styling to the elements.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
