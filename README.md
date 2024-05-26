#[P-HERO-Level-2-Assignment-2]
- A Node.js Backend Application

This repository contains the source code for a backend application built with Express.js, Mongoose, MongoDB, TypeScript, as the main technologies.

## Features

Robust data management: Leverages Mongoose for seamless interaction with MongoDB, ensuring efficient data storage and retrieval.

Type safety: Enforces type checks through TypeScript, enhancing code reliability and maintainability.


## Getting Started

Prerequisites:

Node.js and npm (or Yarn) are installed on your system. You can download them from the official Node.js website: https://nodejs.org/en
A MongoDB instance running locally or remotely.
Installation:

Clone this repository:

Bash
git clone https://github.com/MdMuzahid07/P-HERO-Level-2-Assignment-2.git

Use code with caution.
content_copy
Navigate to the project directory:

Bash
#yarn install


There are two ways to run the application:

Development mode (hot reloading):

Bash
yarn start-dev


This starts the application in development mode, enabling hot reloading whenever you make changes to the source code.

Production mode:

##Bash
#yarn build
#node ./dist/app.js
#Use code with caution.
#content_copy

This builds the application in production mode and then starts it. The built code is placed in the dist directory.

## Scripts

The package.json file defines various scripts to automate tasks:

#start: Starts the application in production mode. <br>
#start-dev: Starts the application in development mode with hot reloading. <br>
#lint: Runs ESLint to check for code style and potential errors. <br>
#build: Builds the application for production using TypeScript. <br>
#lint-fix: Automatically fixes linting errors using ESLint. <br>
#prettier: Formats code using Prettier. <br>
#prettier-fix: Automatically formats code using Prettier. <br>
