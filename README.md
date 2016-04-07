1. meteor npm install
2. meteor npm install --save react react-dom react-router
3. meteor npm install --save-dev eslint eslint-plugin-react eslint-plugin-meteor eslint-config-airbnb

in your package json:
```
{
  ...
  "scripts": {
    "lint": "eslint .",
    "pretest": "npm run lint --silent"
  },
  "eslintConfig": {
    "plugins": [
      "meteor"
    ],
    "extends": [
      "airbnb",
      "plugin:meteor/guide"
    ],
    "rules": {}
  }
}
```
