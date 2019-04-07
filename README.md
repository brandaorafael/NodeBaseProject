# Base code to implement a simple API using NodeJS

## Requirements

To be able to run this project, it's necessary to have NodeJS and its package manager NPM installed in your computer. For more informations, click [here](https://nodejs.org/).

For a better understanding of this project, you must have some knowledge in Javascript and REST API.

## Branches

This project aims to help in the proccess of building a REST API.
As some projects tend to have specific features, the branches of this repository stsrting with ```ft-``` are base projects with some of these features already implemented.
In the following list you can check the branches with some feature already implemented:

* **[Socket.io](https://github.com/brandaorafael/NodeBaseProject/tree/ft-socket)** - Simple chat using network socket

## Installation

Clone, download or fork the repository. Done that, access the project directory in you console and run `npm install` to install all dependencies.

## Project architecture
    
    app.js                          --> Main file, initial configurations
    modules.js                      --> File with all the packages imported to the project
    server.js                       --> File that connects all the modules to its respectives routes.
    package.json                    --> Project data and all package dependencies that will be installed with the "npm install" command.
    routes/
        router.js                   --> File responsible for the versioning of the API endpoints (I'm using only "v1" on this project).
            /v1                     --> Directory with the urls paths of the v1 router, linking with its respectives controllers.
    modules/                        --> Directory containing the controllers of the API.
        example/
            example-controller.js   --> API example controller module.
    test/                           --> Directory containing all the automated test components.
        example/
            example-controller.js   --> File with the specific tests for the example endpoint.
        tests.js                    --> Initial configuration of the automated tests.
    node_modules/                   --> Directory automatically created with all the project dependencies.

This architecture has 4 main parts:
* The ```app.js```, ```server.js``` and ```modules.js``` that configure the API
* The ```routes``` directory that creates the url path endpoints and connects it with its respectives controllers
* The ```modules``` directory with all the controllers for the API
* The ```test``` directory containing the automated tests files.

To create a new endpoint, you must create a new controller at the ```modules``` folder and import it to the ```server.js``` file and add it to its respective router object (probably you will have to create a new one as well). Finally you should create the new endpoint at the ```routes/v1``` folder and connects it to the object created on the ```server.js``` file. If you want to implement an automated test, you should create a new file specific for the endpoint that will be tested and import it to the ```tests.js``` file.

## Running the project

    node app.js

If the project was started with success, it will be routing the API on the port 3000 of your computer. To test the example endpoint, use you browser to go to the url [localhost:3000/v1/example](localhost:3000/v1/example/). The browser will return the message ```{success: true}``` on the screen.

## Testing the API

This project uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) as frameworkss for automated tests. To add new tests you may follow the pattern in the ```test``` folder and look the documention of both framewrks. To run the tests, run the command ```npm test```.
