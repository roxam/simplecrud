# SimpleCRUD

## A simple CRUD** app for the MEAN*** stack

###1. Prerequisites

Your computer must have MongoDB installed and running. On a Mac, this can easily be done using Homebrew. 
Follow instructions [here](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/).

Start it using the command
```
nohup mongod >/dev/null 2>&1 &
```
You can close this terminal tab.

###2. Installation

Make a new directory and cd into it****, then run:
```
git clone https://github.com/roxam/simplecrud.git .
npm install
npm install -g node-dev
npm install -g karma-cli
```

###3. Running the app in development mode*****
```
npm run dev
```

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

**CRUD - Create Read Update Destroy
***MEAN - Mongo Express Angular Node.js
****commands for making a directory and CDing into it:
```
mkdir my-directory-name
cd my-directory-name
```
*****development mode is not suitabe for applications running in a production environment