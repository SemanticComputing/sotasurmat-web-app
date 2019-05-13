# Sotasurmat Web App

Based on https://github.com/SemanticComputing/mmm-web-app

## Requirements

Node.js https://nodejs.org/en/ (tested with 10.15.3 LTS)

Nodemon https://nodemon.io/

## Local development

```
npm install
npm run dev
```

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
