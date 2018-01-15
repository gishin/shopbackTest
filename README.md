# shopbackTest
[Problem 1 Forex]  
exchangeRate/exchangeRate_design.txt: description of design proposl  
exchangeRate/diagram.png: system diagram  

[Problem 2 Programming excercise]  

Programming assignment from Shopback.com  

To run the program, follow the steps below  
$ git clone https://github.com/gishin/shopbackTest.git  
$ cd shopbackTest  
$ npm install  
$ node shopback-calculator.js signup www.shopback.sg  
(You should be able to see the response text)  
  
To run the unit tests, steps as  
$ cd shopbackTest  
$ ./node_modules/mocha/bin/mocha tests --recursive    


For the future extension, follow the steps to create new actions:  
1. Add a new test file under "test/action/" directory, and write all necessary unit tests.   
2. Add a new JS file under "action" directoy, and named as <new_action>.js (e.g. convertRate.js)    
3. Export the default function in <new_action>.js, like https://github.com/gishin/shopbackTest/blob/master/action/signup.js#L12 .  

[Foot note]  
I have to confess that I am not so familiar with Node.js, especially how to do object-oriented proramming in it.  
In Java, I would be using dependency injection framework like Guicy for interface/polymorphism, or even natively defined interfaces and implementation classes.  
So the solution here is just what I can come up with in short period time for extension, there must be other standard ways to do it using framework or something like that. 
