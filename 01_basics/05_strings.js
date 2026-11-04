// const name = "Ved Prakash";
// const repo = 50;

// console.log(name+repo+" Value");

// console.log(`Hello my name is ${name} and my report count is ${repo}`);

// const newStringOne = " Ved Prakash ";

// console.log(newStringOne);

// console.log(newStringOne.trim());


// const url = "https://vedprakash.com/ved%prakash";

// console.log(url.replace("%"," "));

// console.log(url.includes("ved"));

// console.log(url.includes("pandey"));


// const str = "This is a very long string for testing purpose";

// console.log(str.split(' '));

// console.log(str.split(' ',3));

const a = new String("Hello World");

const b = String("Hello World");


// console.log(a instanceof String);
// console.log(b instanceof String);

// console.log(`type of a `,typeof a);
// console.log(`type of b `, typeof b);

const sym = Symbol("example");
//console.log(`${sym}`);

//console.log(" "+ sym);

// console.log("".concat(sym));

// console.log(String(sym));


// console.log(String.fromCharCode(189,43,190,61));


const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

// index = -4;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);


// const myString = "Every green bus drives fast.";

// const lengthWay = myString.charAt(myString.length-3);
// console.log(lengthWay);


// const sliceWay = myString.slice(-4,-1);
// console.log(sliceWay);

const str1 = "Hello";
const str2 = "World";

// console.log(str1.concat(str2));
// console.log(str2.concat(", ",str1));
// console.log(str1.concat(" ",str2));

const str3 = "Cats are the best!";

// console.log(str3.endsWith("Best!"));

// console.log(str3.endsWith("best!"));

// console.log(str3.endsWith("best",17));

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = "dog";
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

// console.log(`The index of the second "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst+1,)},`);

// const dotted = "Istanbul";
// console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);

// let string = "anything something     ";
// console.log(string.length);
// const trimedString = string.trimEnd();

// console.log(trimedString.length);


// let name = "  Pooja  ";
// console.log(name.length);
// let trimedName = name.trim();
// console.log(trimedName.length);

// let person = "   Rajesh";
// console.log(person.length);
// const trimedPerson = person.trimStart();
// console.log(trimedPerson.length);


const testString = "Breaded Mushrooms";
console.log(testString.padEnd(22,"!"));


const newString = "Red Horse";
console.log(newString.padStart(15,"->"));


const ramString = "Ram -> ";
console.log(ramString.repeat(5));
