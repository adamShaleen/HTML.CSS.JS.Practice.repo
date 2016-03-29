
//this is a step by step version of the 'slice' method

function mySlice(array, startIndex, endIndex) {
  var newArray = [];
  for (var i = startIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
----------------------------------------------------------------------

//example

function fireWeapon() {
    console.log(this.weapon.name);
}

var player = {
    name: 'Guy',
    weapon: {
        name: 'Spoon'
    },
    attack: fireWeapon
};

var player2 = {
  name: 'Beard Man',
  weapon: {
    name: 'Beard'
  },
  attack: fireWeapon
}

player.attack();
player2.attack();

------------------------------------------------------------------------

var person1 = {
    name: 'Adam',
    age: 32,
    location: 'Ogden',
    sayName: function() {
        console.log(this.name);
    }
}

person1.sayName();
-----------------------------------------------------------------------

//Explicit binding is apply, call, and bind

// functionName.call(first parameter is object to assign to, argument list);  IMMEDIATELY ENVOKED
// functionName.apply(first parameter is object to assing to, [argument list within array]);  IMMEDIATELY ENVOKED
// .bind is for holding a reference to a function with prop/value for later use.
// functionName.bind({property: value});  this will hold the property: Value to the function for later use.

-------------------------------------------------------------------------

function PlayerCreator(playerName, weaponName) {
    var player = {
        name: playerName,
        weapon: weaponName,
        fire: function() {
            console.log(this.weapon.name);
        }
    }
    return player;
}

var player = PlayerCreator('sumoman', {name: 'Big Belly'});

// OR A BETTER WAY TO DO THIS!!!!

function Player(playerName, weaponName) {
    this.name = playerName;
    this.weapon = weaponName;
}

var player2 = new Player('sumoman', {name: 'Big Belly'});  //very important to clarify 'new' otherwise it would envoke to the window

---------------------------------------------------------------------------


//PROTOTYPES


function Player(playerName, weaponName) {
    this.name = playerName;
    this.weapon = weaponName;
}

Player.prototype.fire = function() {
    console.log(this.weapon.name);
}

var player3 = new Player('guy', 'huge knife');

player2.fire();
