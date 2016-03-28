
// var person = {
//   firstName: 'Adam',
//   lastName: 'shaleen',
//   eyeColor: 'blue',
//   hairColor: 'black',
//   location: 'Ogden'
// }
//
// for (var prop in person) {                 // loops through all property values in the person object looking for value
//     if (person[prop] === 'black') {
//         person[prop] = 'super black';
//     }
// }


//
// var newFirstName = 'firstName';
//
//
// function getFirstName() {
//     return 'firstName';
// }
//
// person[newFirstName] = 'sally';
//
// var person2 = new Object({firstName: 'Adam',})  //this is highly not recommended
//
// var Person3 = function(firstName, lastName, location) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.location = location;
// }
//
// var Bob = new Person3('Bob', 'Dillon', 'unknown');
//
// var User = function(firstName, lastName, userName, email, password) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
// }


// var car = {
//     make: 'subaru',
//     model: 'outback',
//     color: 'black',
//     transmission: 'manual',
//     year: 2009
// }
//
// for (var prop in car) {  // this will console log the property values of 'car'
//     console.log(car[prop]);  // removing the 'car' and brackets would return property names
// }
//
//
// for (var key in car) {
//     if (car[key] === 'black') {
//         delete car[key];            // this would loop through and find any values 'black' and remove the property
//     }
// }


// var module2 = (function() {
//     var privateMethod = function(name, age, location){
//         return name + ' ' + age + ' ' + location
//     };
//     // Anything that is being returned is made public and can be invoked from outside our lexical scope
//
//     return {
//         publicMethod: function (name,age,location) {
//             return privateMethod(name,age,location)
//         }
//     };
// })();
//
//      module2.publicMethod('ben', 29, 'UTAH');

//We use arrays when the order of value matters.

// var peoplesNames = ['Sally', 'Bill', 'Mark', 'Kristy'];
//
// peopleNames['person'] = 'Sally';
//
// console.log(peopleNames); //['Sally', 'Bill', 'Mark', 'Kristy', person: 'Sally']

// var users = [];
//
// var user1 = {
//     firstName: 'Ben',
//     lastName: 'Callis',
//     email: 'benemail',
//     userName: 'benUser',
//     passWord: 'benPass',
//     age: 29
// }
//
// var user2 = {
//     firstName: 'Adam',
//     lastName: 'Shaleen',
//     email: 'adamemail',
//     userName: 'adamUser',
//     passWord: 'adamPass',
//     age: 32
// }
//
// var user3 = {
//     firstName: 'jen',
//     lastName:'shaleen',
//     email: 'jenemail',
//     userName: 'jenUser',
//     passWord: 'jenPass',
//     age: 32
// }
//
// users.push(user1, user2, user3);
//
// function changeEmail(array, prop, value, newEmail) {
//   var i;
//   for(i = 0; i < array.length; i++) {
//       if(array[i][prop] === value) {
//           array[i].email = newEmail;
//       }
//   }
//   return array;
// }
//
//
// function deleteUser(array, prop, value) {
//     var i;
//     for (i = 0; i < array.length; i++) {
//         if (array[i][prop] === value) {
//             delete array[i];
//         }
//     }
//       return array;
// }


// users.push(user1);
// users.push(user2);
//
// function removeName(array, name) {
//     var index = array.indexOf(name);
//     if (index >= 0) {
//         array.splice(index, 1);
//     }
//     return array;
// }
//
// function addItem(array, item) {
//     var index = array.indexOf(item);
//
// }
