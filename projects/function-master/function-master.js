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
//4
function valuesToString(obj) {
    var out = "";

    for (var key in obj) {
        if (typeof obj[key] === "string")
            out += obj[key] + " ";
    }
    return out.trim();
}
console.log(valuesToString);

//5
function arrayOrObject(collection) {
    if (Array.isArray(collection))
        return 'array';

    if (typeof collection === 'object')
        return 'object';

}
//6
function capitalizeWord(str) {
    var firstLetter = str[0];
    var restOfWord = str.substring(1);
    return firstLetter.toUpperCase() + restOfWord;
}
//7
function capitalizeAllWords(str) {
    var split = str.split(' ');
    var out = ' ';
    for (var i = 0; i < split.length; i++) {
        capitalizeWord(split[i]);
        out += capitalizeWord(split[i]);
    }
    out.trim;
}

//8
function welcomeMessage(obj) {
    return 'welcome ' + capitalizeWord(obj.name) + '!';
}
//9

function profileInfo(obj) {
    return capitalizeWord(obj.name) + ' is a ' + capitalizeWord(obj.species);

}
//10
//maybeNoises(obj) : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises
function maybeNoises(obj) {

    if (obj.noises === undefined) return 'there are no noises';

    if (obj.noises.length < 1) return 'there are no noises';

    else return obj.noises.join(' ');
}

//10
//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(obj) {
    if (obj.word === obj.words) return true;
    if (obj.word !== obj.words) return false;

}
console.log(hasWord);

//11
//addFriend() : Should take a name and an object and add the name to the object's friends array then return the object
function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

//12
//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, obj) {
    if (obj.friends) {
        var i = obj.friends.length;
        while (i--) {
            if (name === obj.friends[i]) {
                return true;

            }
        }
    }
    return false;
}

//function isFriend(name, obj) {
    //return (obj.friends !== undefined && obj.friends.indexOf(name) > -1);
//}
//13
function arrayIncludes(array, element) {
    return (array.indexOf(element) > -1);
}

function nonFriends(name, people) {
    var out = [];

    var person;
    for (var i = 0; i < people.length; i++) {
        if (people[i].name === name) person = people[i];
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

//14
//updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(obj, key, val) {
    obj[key] = val;
    return obj;
}

//15
//removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(obj, strings) {
    for (i = 0; i < strings.length; i++) 
    
    
    
}
function dedup(array) {
    var out = [];
    
    for (var i = 0; i < array.length; i++) {
        var currentItem = array[i];
        if (!out.indexOf(currentItem) > -1)) {
            out.push(currentItem);
        }
    }
    
    
    }
