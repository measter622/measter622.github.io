var animal = {};
animal.species = "dog";
animal.name = "Mike";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "growl";
noises[noises.length] = "bark";
noises.unshift("whinning");
noises[noises.length] = "crying";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
var animNoises = animal.noises.concat(noises);
console.log(animNoises);

animal.noises.push("roof, roof");
console.log(noises);
console.log(animal);
//Create a variable named animals and assign it to an empty array.
var animals = [];

//push our animal that we created to animals. animal.push("dog");
animals.push(animal);
console.log(animals);

//inspect animals. What does it look like?
// Create a variable called duck and assign it to the data:
var duck = {
    species: "duck",
    name: "jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);
console.log(animals);


var lion = {
    species: "lion",
    name: "leo",
    noises: ["roar", "yawn", "growl", "hungry"]
};
animals.push(lion);
console.log(animals);


var bear = {
    species: "bear",
    name: "smokey",
    noises: ["roar", "click", "purr", "grunt"]
};
animals.push(bear);
console.log(animals);

console.log(animals.length);

// Array because it allows easy access to elements of the lists 
var friends = [];

//Write a function that takes our animals array and returns a random element using Math.random
//Using this function that you just created, get a random animal and add its name to friends.
//inspect friends.
//add friends as a property named friends on one of the animals in animals


//inspect your work.


function getRandom() {
    var index = Math.floor(animals.length * Math.random());
    return animals[index];
}

friends.push(getRandom().name);
console.log(friends);
bear.friends = friends;

console.log(bear.friends);

lion.friends = ["Jerome"];


//Open up my_code.js in your editor.

//Implement a function called search that:
//Takes 1 paramater, a name of an animal
//Returns the animal's object if an animal with that name exists
//Returns null if no animal with that name exists
//Use the search bar at the top of the page to make sure your function works.

function search(animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animalName.toUpperCase() === animals[i].name.toUpperCase()) {
            return animals[i];
        }
    }
    return null;
}

//Write a function called edit that:
//Takes 2 parameters, a name of an animal and an object
//If an animal with that name exists, replace it's entire object with the new object
//Otherwise do nothing
//Test it on the website

function edit(animalName, object) {
    for (var i = 0; i < animals.length; i++) {
        if (animalName === animals[i].name) {
            var animal = animals[i];
        }
    };
        var index = animals.indexOf(animal);
        animals[index] = object;
}

//Write a function called remove that:
//Takes 1 parameter, a name of an animal
//If an animal with that name exists, remove it
//Test that it works on the website

function remove(animalName) {
    for (var i = 0; i < animals.length; i++) {
      if (animalName.toUpperCase() === animals[i].name.toUpperCase()) {
          animals.splice(i, 1);
      }
      
    }
}

function create(object) {
    if (object.name.length && object.species.length && !search(object.name)) animals.push(object);

}