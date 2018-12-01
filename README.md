# SendIT
### Build Status  
[![Build Status](https://travis-ci.org/un-tethered/SendIT.svg?branch=develop)](https://travis-ci.org/un-tethered/SendIT)
[![Coverage Status](https://coveralls.io/repos/github/un-tethered/SendIT/badge.svg?branch=develop&service=githu)](https://coveralls.io/github/un-tethered/SendIT?branch=develop&service=githu)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/un-tethered/SendIT/maintainability)

#### SendIT is an app that helps users deliver parcels to different destinations.


## Implemented Features
* Users can create a parcel delivery order
* Users can fetch all parcel delivery orders they have made
* Users can fetch a specific order to view details
* Users can cancel an order


## Project Management
Project is managed [here](https://www.pivotaltracker.com/n/projects/2223621) using the project management tool, [Pivotal Tracker](https://www.pivotaltracker.com).

## Templates
UI templates are hosted on Github pages [here](https://un-tethered.github.io/SendIT/UI)

## Technologies Used
* [Node.js](https://nodejs.org) - A runtime environment based off of Chrome's V8 Engine for writing Javascript code on the server.
* [Express.js](https://expressjs.com) - Web framework based on Node.js.
* [Babel](https://babeljs.io) - Javascript transpiler.
* [Eslint](https://eslint.org/) - Javascript linter. 
* [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style [guide](https://github.com/airbnb/javascript) was followed.

## Testing tools
* [Mocha](https://mochajs.org/) - A Javascript test framework.
* [Chai](http://chaijs.com) - Assertion library.
* [nyc](https://github.com/istanbuljs/nyc) - Istanbul's command line interface.

## API Infomormation
   Heroku  https://the-sendit-app.herokuapp.com/

  | METHOD  | DESCRIPTION                  |             ENDPOINTS                                |
  | --------| -------------                |          -------------------------------             |
  | GET     | Get all orders for requester |      `/api/v1/parcels`                               |
  | GET     | Get particular order         |    `/api/v1/parcels/:parcelId`                       |
  | POST    | Create an order              |    `/api/v1/parcels`                                 |
  | PUT     | Cancel order                 |     `/api/v1/parcels/:parcelId`                      | 
  | GET     | Fetch all orders by a user   |     `/api/users/:userId/parcels`                     | 
 

## How to install and checkout the app

### Installation
* Install [NodeJs](https://nodejs.org/en/download/) .
* Clone this repository using `git clone https://github.com/un-tethered/SendIT.git`.
* Run `npm install` to install all dependencies.
* Run `npm start` to start the server.
* Navigate to [`localhost:3000/api/v1`](localhost:3000/api/v1) in your browser to access the application.

### Testing the application
Requirements
* [Postman](https://www.getpostman.com/) - API development and testing environment.

Testing with Postman
* Install Postman by following the link above.
* Navigate to `localhost:3000` in Postman to access the application(Check endpoint details above for routes)


Running unit tests.
* In an open terminal, navigate to the cloned project file.
* Run `npm test`. This runs tests and displays coverage data generated by [Istanbul's](https://istanbul.js.org) nyc.

## Author
* Omoefe Dukuye :bowtie:
