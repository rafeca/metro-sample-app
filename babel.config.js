module.exports = {
  "presets": ["@babel/preset-react", "@babel/preset-flow"],
  "plugins": [[
    "@babel/plugin-transform-modules-commonjs",
    {strict: false, allowTopLevelThis: true},
  ]],
  "env": {
    "development": {
      "plugins": [[
        "module:metro-babel7-plugin-react-transform", {
        "transforms": [{
          "transform": "react-transform-hmr",
          "imports": ["react"],
          "locals": ["module"]
        }]
      }]]
    }
  }
};
