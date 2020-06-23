# [HackyFeed](http://hackyfeed.herokuapp.com/) 👨‍💻

Hackyfeed is server-side-rendered app for getting stories from HackerNews api.

✅ Create-React-App.  
✅ Express-Build.  
✅ Testing.  
✅ Docker-Build.  
✅ Docker-Tag.  
✅ Docker-Push.  
✅ Heroku-Deployment. 

All the above is being handled by [Travis](https://travis-ci.com/) 😎


## Installation

Use the [node](https://nodejs.org/en/) for installing the project dependencies

```bash
yarn install
```

## Usage

Run the application locally on port:8080
```
yarn dev
```

## Deployment 

### Deployment in Heroku (via Github integration)
The repository can be directly deployed to Heroku via creating a webhook with the repository. 

For the following, these are below features which have been included :  
✅ Created webpack.server.js (Create an optimised build).  
✅ It also runs the express app for the Api Integration  
✅ Added ProcFile for default run command after deployment  


### Deployment in Heroku (via Docker Image)
The repository is using Travis for CI-CD and is using dockerized image which is deployed in Heroku  

For the following, these are below features which have been included :  
✅ Created docker-compose.yml and Dockerfile.  
✅ Created .travis.yml for CI-CD pipeline.  
✅ Used environment variable for storing Heroku & Docker username/password  


### Releases 

| Releases  | Features                             | Date             | Status |
|-----------|--------------------------------------|------------------|--------|
| v 0\.1\.0 | Heroku App with Proc File            |  22nd June, 2020 | Released |
| v 0\.1\.1 | Heroku Dockerized App with Travis CI |  23rd June, 2020 | Released |
| v 0\.1\.2 | Google Analytics & Push Notification |  26th June, 2020 | On Track |


## Contributing 🖊 

This repository is not used for contribution.  
All issues found in the application are welcomed to be raised in the issue section ✌🏻
