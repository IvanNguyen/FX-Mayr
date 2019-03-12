# src-static

Dockerized static boilerplate with Webpack, Babel and Bootstrap.

## Start only pages outside of container

With `yarn` and `gulp` installed globally
```
./src-static/yarn install
./src-static/yarn serve
```

This will only launch pages with BrowserSync on host machine. No docker container is used.
Warning: It's best to use docker, but incase you need it, play with this around would not be a problem


## Start static containers

Only launch static containers so that a frontend developer doesn't need to launch the whole project.

```
./src-static/start
```

## Stop static containers

In case the static containers are slowing down the computer when running the whole project, just stop the containers:

```
./src-static/stop
```

## FAQ

How to work with this `src-static`
1. Create a page: Create a file directly in `src` folder
2. Use JS dependencies:
  - `yarn add`
  - add dependencies files in `bundle.config.json`
3. Use CSS dependencies: Add dependencies directly in postcss files (support node_modules)
4. What is underscored folder name for: Prevent `pug` from compile those folder's file.