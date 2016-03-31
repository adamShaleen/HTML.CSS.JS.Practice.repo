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



// ClOSURES
// 1. a nested child function can access the parent functions
// 2. we take a snapshot in time of the parent variables.
// A factory that creates a factory analogy.

// COLOR factory

  function colorFactoryFactory(colorName) {
      return function paintCanMaker() {
          console.log('here is a ' + colorName + ' paint can.')
      }
      return paintCanMaker;
  }

  var redPaintCanFactory = colorFactoryFactory('red');
  var bluePaintCanFactory = colorFactoryFactory('blue');
  var greenPaintCanFactory = colorFactoryFactory('green');

  redPaintCanFactory();
  bluePaintCanFactory();
  greenPaintCanFactory();

//---------------------------------------------------------------------------


function calorieTracker(baselineCalories) {
    // keep track of totalCalories today
    var totalCaloriesToday = 0;
    var totalDays = 1;
    // keep track of totalCalories all time
    var totalCaloriesAllTime = 0;
    // keep track of personalBaseLineCalories
      //in parameter
    //addCalories()
    function reportEating(totalCaloriesConsumed) {
        totalCaloriesToday += totalCaloriesConsumed;
    }
    //startNewDay()
    function startNewDay() {
        totalCaloriesAllTime += totalCaloriesToday;
        totalCaloriesToday = 0;
    }
    //estimated weight loss today()
    function getTodaysWeightLoss() {
        //3500 calories = 1 lb
        return totalCaloriesToday - baselineCalories / 3500;
    }
    //estimated weight loss all time()
    function getAllTimeWeightLoss() {
        //3500 calories = 1 lb
        //today - baseline / 3500
        return (totalCaloriesToday - (baselineCalories * totalDays)) / 3500;
    }

    return {
        reportEating: reportEating,
        startNewDay: startNewDay,
        getTodaysWeightLoss: getTodaysWeightLoss,
        getAllTimeWeightLoss: getAllTimeWeightLoss
    }
}

var juansTracker = calorieTracker(2300);
var pingsTracker = calorieTracker(1800);
var sumoTracker = calorieTracker(8500);

//-----------------------------------------------------------------------------

// OBJECT MANIPULATION EXAMPLES

var cat = {
  name: 'Dinah',
  type: 'Calico',
  weight: '34 mice',
  modd: 'grumpy',
  color: 'snickers'
}

// dot notation
// get- NOT ON THE LEFT SIDE OF A SINGLE EQUALS MARK.
if(cat.weight > 17) {
  console.log(cat.weight);
}

var catWeight = cat.weight;

function forSomeReasonWeCareAboutCatWeight(cat.weight) {
  console.log('we care and your cat weight ' + weight);
}

forSomeReasonWeCareAboutCatWeight(cat.weight);

// set- WHEN ON THE LEFT SIDE OF A SINGLE EQUALS MARK.
cat.weight = 32;

//bracket notation
// GET

if(cat['weight'] > 17) {
  console.log(cat.weight);
}

var catWeight = cat['weight'];

//SET

cat['weight'] = 32;


// New object EXAMPLES

var outfit = {
  shirt: {
    color: 'blue',
    size: 'medium',
    style: 'spandex',
  },
  pants: {
    color: 'oranges',
    size: 'XS',
    style: 'denim'
  }
};


//get
outfit.shirt.color;

if (outfit.pants.size === 'XS') {
  console.log('cringe');
}

//set
 outfit.shirt.style = 'cotton tee';

 //Another objects
 var calc = {
  total: 0
}

calc.total += 7;
calc.total -= 3;
calc.total = (calc.total * 33)
calc.total = calc.total / 100

console.log(calc.total)
