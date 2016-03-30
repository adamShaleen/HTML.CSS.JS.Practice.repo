//when you run a JS. it runs synchronously...1 line, then the next, and so on.
//We need a way to let JS keep going, and when we need the asynchornous process
//it can use it as necessary.  You want a webpage that keeps working even through
//you go to a server to get information.
//callbacks=build a function, when the process is done, then it is envoked.

function makeASandwhich(callback) {
    console.log('Making a sandwhich');
    setTimeout(function(){
        callback();
    }, 2000)
}

var sandwhichCallback = function() {
  console.log('So Yummy!');
}

makeASandwhich(sandwhichCallback);  //callback is envoked once the task is complete


var names = [{first: 'taco', last: 'johnson', middle: 'T'}, {first: 'banjo', last: 'goober', middle: 'jiff'}];
var newNames = [];
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  newNames.push(name.last + ' ' + name.first + ' ' + name.middle);
}

console.log(newNames);

//Lots of built in utility functions with underscore library
// _.map for example.  Creates a for-loop for us.  reusable and fast.  'high order functions'
//Try and learn one new utility function everyday.

//PROTOTYPES.
//The primary reason to use a prototype is efficiency.  We are going to make many, many, data structures.
//By putting a function on the object, we're making a copy each time the 'new' keyword is used, but
//we're not really doing anything specific.  By using a prototype that function exists one time, and is cleanly
//shared across the data structures.
//You can put a prototype wherever you want.

//MDN has lots of great built in prototypes you can use and explanations.
