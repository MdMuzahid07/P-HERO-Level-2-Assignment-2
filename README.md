#[P-HERO-Level-2-Assignment-2]
- A Node.js Backend Application<br>

This repository contains the source code for a backend application built with Express.js, Mongoose, MongoDB, TypeScript, as the main technologies.<br>

## Features<br>

Robust data management: Leverages Mongoose for seamless interaction with MongoDB, ensuring efficient data storage and retrieval<br>.

Type safety: Enforces type checks through TypeScript, enhancing code reliability and maintainability.<br>


## Getting Started<br>

Prerequisites:<br>

Node.js and npm (or Yarn) are installed on your system. You can download them from the official Node.js website: https://nodejs.org/en
A MongoDB instance running locally or remotely.<br>
Installation:<br>

Clone this repository:<br>

##Bash<br>

1. git clone https://github.com/MdMuzahid07/P-HERO-Level-2-Assignment-2.git<br>

2. Navigate to the project directory:<br>

##Bash<br>

#yarn install<br>


There are two ways to run the application:<br>

Development mode (hot reloading):<br>

Bash<br>
yarn start-dev<br>


This starts the application in development mode, enabling hot reloading whenever you make changes to the source code.<br>

Production mode:<br>

##Bash<br>

# yarn build<br>


This builds the application in production mode and then starts it. The built code is placed in the dist directory.<br>

## Scripts<br>

The package.json file defines various scripts to automate tasks:<br>

1. start: Start the application in production mode. <br>
2. start-dev: Starts the application in development mode with hot reloading. <br>
3. lint: Runs ESLint to check for code style and potential errors. <br>
4. build: Builds the application for production using TypeScript. <br>
5. lint-fix: Automatically fixes linting errors using ESLint. <br>
6. prettier: Formats code using Prettier. <br>
7. prettier-fix: Automatically formats code using Prettier. <br>
