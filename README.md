# README

[react-app-starter](https://github.com/hfagerlund/react-app-starter/) is a simple ('[Docker](https://www.docker.com/)ized') [React](https://reactjs.org/) app skeleton.

Fork and modify this project as a time-saving and easy to understand starter for your own new [React](https://reactjs.org/) project.

## Quick Start
```
$ git clone https://github.com/hfagerlund/react-app-starter.git
$ cd react-app-starter
$ yarn install
$ yarn run build
$ yarn run start
# browser automatically opens to http://localhost:8080/build/home.html
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

# browse to http://localhost:8000/home.html
```

:tada:

## What's going on here?
* **[React](https://reactjs.org/)**, **[react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)** - These libraries are installed using **[npm](https://www.npmjs.com/)**, the package manager for **[Node.js](https://nodejs.org/en/)**: `$ npm i -S {react,react-dom}`
* **[Babel](https://babeljs.io/)** - Compiles JSX into JavaScript (for rendering in the browser);
* **[JSX](https://reactjs.org/docs/introducing-jsx.html)** - A syntax extension to JavaScript used for creating React 'elements';
* **[Webpack](https://webpack.js.org/)** - Module bundler (ie. runs the code through **Babel** etc.);
  * **[HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)** - Generates an HTML file to render the generated bundle.js file in the browser;
* **[Docker](https://www.docker.com/)** - The entire app is both built (using **[Yarn](https://yarnpkg.com/)**) and deployed (to **[NGINX](https://www.nginx.com/)**) inside Docker.

(All copyrights for the above remain with their respective owners.)
- - -
## License
Copyright (c) 2019 Heini Fagerlund. Licensed under the [BSD-3-Clause license](https://github.com/hfagerlund/react-app-starter/blob/master/LICENSE).
