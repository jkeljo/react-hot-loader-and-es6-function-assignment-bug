React docs in a couple places recommend reassigning functions in ES6 classes:

https://facebook.github.io/react/docs/reusable-components.html#no-autobinding

https://facebook.github.io/react/docs/pure-render-mixin.html

In the presence of react-hot-loader 3.0.0-beta.2, however, this pattern
does not work correctly. Looking at it in the debugger, it appears that
react-hot-loader is cloning the objects without calling the constructor
or otherwise updating already bound member functions.

To repro:

1. `npm start`
2. Open localhost:8080 in the browser
3. Click the button; observe the text does not change
4. Crtl+C the webpack-dev-server
5. Comment out the `'react-hot-loader/patch',` line in `webpack.config.js`
6. `npm start`
7. Open localhost:8080 in the browser
8. Click the button; observe the text does change
