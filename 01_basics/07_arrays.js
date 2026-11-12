//array

const myArr = [0,1,2,3,4];
// console.log(myArr);

// console.log(myArr[1])

const myHeros = ["Shaktiman","Nagraj", "Dhurv"];

// console.log(myHeros);

const myArr2 = new Array(1,2,3,4,5);

//Array methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop();
// myArr.pop();
// myArr.pop();
// myArr.pop();

// myArr.unshift(9)
// myArr.unshift(8)
// myArr.unshift(7)
// myArr.unshift(6)
// myArr.shift()
// myArr.shift()
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);


//slice , splice

// console.log("A ",myArr);

const mynewArr = myArr.slice(2,4);

// console.log(mynewArr);
// console.log("B ",myArr);

const mynewArr2 = myArr.splice(2,1,)


const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);

// let combinedHeros = marvelHeros.concat(dcHeros);
// console.log(combinedHeros);


// const allNewHeros = [...marvelHeros,...dcHeros];
// console.log(allNewHeros);


const anotherArray = [1,2,3,4,[5,6,7],[8,[9,10,11]]];
const real_another_array = anotherArray.flat(3);
// console.log(real_another_array);





// console.log(Array.isArray("Ved Prakash"));
// console.log(Array.from("Ved Prakash"));
// console.log(Array.from({name:"Ved Prakash"}));



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
