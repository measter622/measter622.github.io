// Should
function objectValues(obj) {
    var out = [];
    
    for (var key in obj) {
        out.push(obj[key]);
    }   
    
    return out;
}


function keysToString(obj) {
    return Object.keys(obj).join(' ');
}

function valuesToString(obj) {
    var out = "";

    for (var key in obj) {
        if (typeof obj[key] === "string")
        out += obj[key] + " ";
    }
return out.trim();
}
console.log(valuesToString);

//4
function arrayOrObject(collection) {
    if (Array.isArray(collection))
    return 'array';
    
    if (typeof collection === 'object')
    return 'object';
    
}
//5
function capitalizeWord (str) {
    var firstLetter = str[0];
    var restOfWord = str.substring(1);
    return firstLetter.toUpperCase() + restOfWord;
}
//6
function capitalizeAllWords(str) {
    var split = str.split(' ');
    var out = ' '; 
    for (var i = 0; i < split.length; i++) {
        capitalizeWord(split[i]);
        out += capitalizeWord(split[i]);
    }
    out.trim;
}

//7
function welcomeMessage(obj) {
    return 'welcome ' + capitalizeWord(obj.name) + '!';
}
//8

function profileInfo (obj) {
    return capitalizeWord(obj.name) + ' is a ' + capitalizeWord(obj.species);
    
}
//9
//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises
function maybeNoises(obj) {
    if object.noises === [i]

}








//13
function nonFriends(name, people) {
    var out = [];
    
    var person;
    for (var i = 0; i < people.length; i++) {
    for (people[i].name === name) person = people[i];
    }
    
    var friends = person.friends;
    
    // find the object representing the named peron
        // go thru all the people
        // if the current person's name is the same as the namegiven, hold on to that person
    // get that person's friends list
    
    // go thru all th otherpeople
    // ask 'is this person's name in the named person's friends list?'
    // if not, add the current person's name to the out array
    for (var j = 0; j < people.length; j++) {
        var currentPerson = people[j];
        if (currentPerson === person) continue;
        
        if (!arrayIncludes(friends, currentPerson.name)) {
            out.push(currentPerson.name);
        }
    }
    return out;
}