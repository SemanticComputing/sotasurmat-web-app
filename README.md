# Sotasurmat Web App

Based on https://github.com/SemanticComputing/mmm-web-app

## Requirements

Node.js https://nodejs.org/en/ (tested with 10.15.3 LTS)

Nodemon https://nodemon.io/

If your home directory is mounted from a network drive, Node.js should
be installed using Node Version Manager https://github.com/nvm-sh/nvm  

## Local development

Install the dependencies specified in `package.json` (this command needs to be run only once,
  as long as you don't modify the dependencies):

`npm install`

Run client and server concurrently:

`npm run dev`

## Deploy with Docker

Note: the Docker container is meant to run on a server (NODE_ENV=production). If you want
to run it on localhost, the API url needs to be changed in `src/client/epics/index.js`.

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

## Set up a new project using this repository as a base, with the possibility of merging the new commits added to this repository

1. Clone this repository:
`git clone git@github.com:SemanticComputing/mmm-web-app.git`

2. Set up a new GitHub repository. Do not initialize it with anything. It needs to be an empty repository.
You can name it how you like and you can rename your local folder to match that.

3. Copy the url of your new repository.

4. With terminal go to the folder with the clone of this repository (mmm-web-app).

5. Change remote origin from mmm-web-app to your new repository:
`git remote set-url origin [your new github repo here]`

6. Check that the origin changed to your new repository:
`git remote -v`

7. Push your local clone of mmm-web-app to your new repository:
`git push`

8. Set the original repository (mmm-web-app) as the upstream of your new repository:
`git remote add upstream git@github.com:SemanticComputing/mmm-web-app.git`

9. When new commits appear on the original repository (mmm-web-app) you can fetch them to your new repository.
The example fetches only master branch:
`git fetch upstream master`

10. Go to the branch of your new repository where you want to merge the changes in upstream.
Merge, solve conflicts and enjoy:
`git merge upstream/master`
