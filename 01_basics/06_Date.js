//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);


// let myCreatedDate = new Date(2023,1,5,2,2,5);
let myCreatedDate = new Date("2026-01-08");
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))



