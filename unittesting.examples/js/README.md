# Unit Testing Example in JavaScript

This uses the ECMAScript module system for the code under test. Mocha is used
as the test framework.

## Requirements

Install Node.js version greater than 13.2.0. Then run `npm install` in this folder to install packages. You will also need selenium driver for a browser that is available on your system.

## Run the test cases

To run the unit test cases, run `npm run test`. To run the selenium test cases, run `npm run test-browser`.

## Run the web application

Run `npm run serve`, and visit the http://localhost:5000 (or the URL in the output). Note that
if you open index.html file in the browser by itself, you will get the CORS error.

## Links

### Articles

These are the resources that are used during the development of this example:

- EMCAScript module system (why we need Node version that is greater than 13.20.0, and the `.mjs` extension) [https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules](https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules)
- Selenium example [https://www.npmjs.com/package/selenium-webdriver#usage](https://www.npmjs.com/package/selenium-webdriver#usage)
- Using Selenium with Mocha [https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/](https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/)
- Mocha async/await [https://mochajs.org/#using-async-await](https://mochajs.org/#using-async-await)
- Using serve during test case via API [https://www.npmjs.com/package/serve#api](https://www.npmjs.com/package/serve#api)
