"use strict";
//variables 
//let and const difference 
let username = "noman";
const age = 25;
username = "John";
var rollNo = 123;
console.log(username);
//
//Data types javascript
//string
let name1 = "noman";
//number
let age1 = 23;
//boolean  true or false 
let adult = true;
//any 
let userId = 123;
//array  []
let names = ["ali", "ahmed", "noman"];
let user = {
    id: "1",
    username: "Ali",
    age: 23,
    cnic: "123456789",
    isMarried: false
};
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let author = "Quaid-e-Azam";
let quote = "There are two powers in the world; one is the sword and the other is the pen.";
console.log(`${author} once said, “${quote}”`);
// backticks `
// \t \n
let schoolName = "\tSaylani wlaware\n trust \n created by \n Arif karim";
console.log(schoolName);
//functions 
// give function a name 
// void (return nothing)
function sum(p1, p2) {
    let result = p1 + p2;
    return result;
}
function userNameReturn(a) {
    return a;
}
userNameReturn("noman");
let output = sum(2, 3);
console.log(output);
// assion function to a variable
//annonymous function
let add = (p1, p2) => {
    let result = p1 + p2;
    return result;
};
let myData = (myName, myAge, myFriend) => {
    console.log(`My name is ${myName} and my age ${myAge} and my friends are ${myFriend}`);
    // myFriend.forEach((a)=>{
    //     console.log(a)
    // })
};
//argumengts 
let myDetails = (myName, myAge, ...more) => {
    console.log(myName, myAge, more);
};
myDetails("Noman", 23, "123456789", "BSSE", "Rawalpindi");
//  console.log(add(2,3))
// myData("noman",25,["ali","ahmed","noman"])
// [0,]
let arr1 = [2, 5, -6, -7, 8, 9, 0, -3, -2];
//find even number 
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0 && arr1[i] > 0) {
        console.log(arr1[i]);
    }
}
console.log("odd number");
//find odd 
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 != 0 && arr1[i] > 0) {
        console.log(arr1[i]);
    }
}
//find sum of all numbers
let sumOfArrayElement = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0)
        sumOfArrayElement = sumOfArrayElement + arr1[i];
}
console.log(sumOfArrayElement);
//find max number
//[2,5,-6, -7,8,9,0,-3,-2]
let maxNumber = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > maxNumber) {
        maxNumber = arr1[i];
    }
}
console.log(maxNumber);
//using Math.max
for (let i = 0; i < arr1.length; i++) {
    maxNumber = Math.max(...arr1);
}
console.log("max ", Math.max(1, 2));
// console.log(maxNumber)
//
//find max using reduce method
let max = arr1.reduce((a, b) => Math.max(a, b));
console.log(max, "using reduce method");
