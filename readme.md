# SimpleCRUD

## A simple CRUD<sup>[1](#CRUD)</sup> app for the MEAN<sup>[2](#MEAN)</sup> stack

There is some simple unit testing (Jasmine, Karma) and end-to-end testing (Protractor) included. The unit tests run on file change, the end-to-end section is the optional step 4. [Why were these technologies chosen?](docs/why.md)

All commands are run on a command line - on a Mac, this is in the Terminal app. 

###1. Prerequisites

Your computer must have MongoDB installed and running. On a Mac, this can easily be done using Homebrew. 
Follow instructions [here](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/).

Start it using the command
```
nohup mongod >/dev/null 2>&1 &
```
You can close this terminal tab.

You also must have node.js installed. [Instructions here.](https://nodejs.org/en/download/) 

###2. Installation

Make a new directory and cd into it<sup>[3](#commands)</sup>, then run:
```
git clone https://github.com/roxam/simplecrud.git .
npm install
npm install -g node-dev
npm install -g karma-cli
```

###3. Running the app in development mode<sup>[4](#dev)</sup>
```
npm run dev
```
Now open your browser of choice and go to the index page at: [http://localhost:3000](http://localhost:3000)

Add some new articles at: [http://localhost:3000/admin](http://localhost:3000/admin)

###4. (Optional) End-to-end testing using Protractor

Run this:
```
npm run e2e-update
```
Then start this and leave it running in the background:
```
npm run e2e-start
```
In a new terminal window, run the tests
```
npm run e2e
```

---

Footnotes:

- <a name="CRUD">1</a> CRUD - Create Read Update Destroy
- <a name="MEAN">2</a> MEAN - Mongo Express Angular Node.js
- <a name="commands">3</a> commands for making a directory and CDing into it:
```
mkdir my-directory-name
cd my-directory-name
```
- <a name="dev">4</a> development mode is not suitabe for applications running in a production environment