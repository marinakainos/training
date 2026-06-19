const sayHello = require('./hello.js');

sayHello('John');
sayHello('Peter');
sayHello('Rohit');


const myModule = require('./module2.js');

console.log(myModule.foo); // logs 'bar'
myModule.myFunction1(); // logs 'Hello from myFunction1!'
myModule.myFunction2(); // logs 'Hello from myFunction2!'