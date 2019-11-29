# README

[react-app-starter](https://github.com/hfagerlund/react-app-starter/) is a simple ('Dockerized') React app skeleton.

## Quick Start
```
$ git clone https://github.com/hfagerlund/react-app-starter.git
$ cd react-app-starter
$ npm install
$ npm run build
$ npm run start
# browse to http://localhost:8080/
```

### Using Docker
```
# start Docker
$ sudo systemctl start docker

# build the image
## important - 'build' must not be listed in .dockerignore (else will fail)
$ sudo docker build . -t my-react-app -f Dockerfile

# list all images
$ sudo docker images

# run the container
$ sudo docker run -p 8000:80 my-react-app

# browse to http://localhost:8000/
```

:tada:

- - -
## License
Copyright (c) 2019 Heini Fagerlund. Licensed under the [BSD-3-Clause license](https://github.com/hfagerlund/react-app-starter/blob/master/LICENSE).
