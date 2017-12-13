# metro-sample-app

This repo contains a very simplistic web app being built with [metro](https://github.com/facebook/metro), using the minimal configuration.

## Development

To use metro for development, start the metro server by running:

```
$ yarn run server
```

Now you can open the `dev.html` file and start modifying the code in the `src/` folder.

## Production

In order to build the app for production, execute:

```
$ yarn run build
```

This will generate the production bundle in the `build/` folder. You can test it by opening the `prod.html` file in your browser.
