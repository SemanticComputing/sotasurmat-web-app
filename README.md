# Sotasurmat Web App

Based on https://github.com/SemanticComputing/mmm-web-app

## Requirements

* Node.js https://nodejs.org/en/ (tested with 10.15.3 LTS)

* Nodemon https://nodemon.io/

Note: if your home directory is mounted from a network drive, Node.js should
be installed using Node Version Manager https://github.com/nvm-sh/nvm  

## Local development

Install the dependencies specified in `package.json` (this command needs to be run only once,
  as long as you don't modify the dependencies):

`npm install`

Run client and server concurrently:

`npm run dev`

## Deploy with Docker

### Build
 `docker build -t sotasurmat-c .`

### Run
 `docker run -d -p 8080:3001 --name sotasurmat sotasurmat-c`

### Upgrade
```
docker build -t sotasurmat-c .
docker stop sotasurmat
docker rm sotasurmat
docker run -d -p 8080:3001 --name sotasurmat sotasurmat-c
```
