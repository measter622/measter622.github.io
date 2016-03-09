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
        
}//Use this file to implement Part One of your project

var animal;
//Write a function named welcomeMessage that takes an animal object like this one: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] } and returns a string that says "Welcome, \ !".

//Your result should look like this: "Welcome, Duck!"
//use your strCapitalizer function inside welcomeMessage to ensure correct capitalization.

var welcomeMessage = function('Welcome',species)  {
    species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] 
}