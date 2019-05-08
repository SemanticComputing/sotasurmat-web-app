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
 `docker build -t mmm-web-app-c .`

### Run
 `docker run -d -p 3006:3001 --name mmm-web-app mmm-web-app-c`

### Upgrade
```
docker build -t mmm-web-app-c .
docker stop mmm-web-app
docker rm mmm-web-app
docker run -d -p 3006:3001 --name mmm-web-app mmm-web-app-c
```
