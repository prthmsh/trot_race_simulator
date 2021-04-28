# trot_race_simulator
## _A "worker" that subscribes to events and saves them in to MongoDB_

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://nodejs.org/en/)

> Note: Requires [Node.js](https://nodejs.org/) v10+ to run.

### Installation

Close repo from Git hub

```sh
$ git clone https://github.com/prthmsh/trot_race_simulator.git
```
### Environment Variables

.env files is located at root of repo. User can change MongoDB host in this file

```sh
MONGO_HOST=localhost:27017
```

### Docker

Using Mongo as docker container with mongo version 3.4
Docker compose file is placed in root of the repo. User need to navigate to root folder & run below command

```sh
$ cd trot_race_simulator
$ docker-compose up
```

This will create running container of MongoDB and pull in the necessary dependencies.
Verify the mongodb is up & running by navigating to your server address in your preferred browser.

```sh
localhost:28017
```

Install node packages witrh below command:

```sh
$ npm install
```

### Test

Run Database integration test caes with below command:

```sh
$ npm test
```
It will run test cases & will display resilt on your terminal.
### Run

Run worker with below command:

```sh
$ npm start
```

## License

MIT
