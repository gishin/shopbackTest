# shopbackTest
Programming assignment from Shopback.com

To run the program, follow the steps below
$ git clone <URL>
$ cd shopbackTest
$ npm install
$ node shopback-calculator.js signup www.shopback.sg
(You should be able to see the response text)

To run the unit tests, steps as
$ cd shopbackTest
$ ./node_modules/mocha/bin/mocha tests --recursive  


For the future extension, follow the steps to create new actions:
1. Add a new test file under "test/action/" directory, and write all necessary unit tests.2. Add a new JS file under "action" directoy, and named as <new_action>.js (e.g. convertRate.js)
3. Export the default function in <new_action>.js, like https://github.com/gishin/shopbackTest/blob/master/action/signup.js#L12 .

