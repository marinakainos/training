// Importing 'events' module and creating an instance of the EventEmitter Class
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener Function - welcomeUser()
const welcomeUser = () => {
    console.log('Hi There, Welcome to the server!');
}

// Listening for the userJoined event using the on() method
myEmitter.on('userJoined', welcomeUser);

// Emitting the userJoined event using the emit() method
myEmitter.emit('userJoined');



// Listener Function 1: sayHello
const sayHello = () => {
    console.log('Hello User');
}

// Listener Function 2: sayHi
const sayHi = () => {
    console.log('Hi User');
}

// Listener Function 3: greetNewYear
const greetNewYear = () => {
    console.log('Happy New Year!');
}

// Subscribing to `userJoined` event
myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('userJoined', greetNewYear);

// Emiting the `userJoined` Event
myEmitter.emit('userJoined');