//variables 
//let and const difference 

 let username = "noman"
 const age = 25
 username = "John"
 var rollNo = 123
console.log(username)
//

//Data types javascript

//string
let name1: string = "noman"

//number
let age1 : number = 23

//boolean  true or false 
 let adult :boolean = true

 //any 
 let userId : any = 123

 //array  []
 let names : string[] = ["ali","ahmed","noman"]

 //object  {}

 interface User {
    id: any;
    username: string;
    age: number;
    cnic: string;
    isMarried: boolean;
 }


   let user: User = {
     id : "1",
     username : "Ali",
     age:23,
     cnic:"123456789",
     isMarried:false
   }

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let author:string = "Quaid-e-Azam"
let quote: string = "There are two powers in the world; one is the sword and the other is the pen.";

console.log(`${author} once said, “${quote}”`);

 // backticks `

 // \t \n
 let schoolName:string = "\tSaylani wlaware\n trust \n created by \n Arif karim"
 console.log(schoolName)


 //functions 

 // give function a name 
// void (return nothing)
  function sum(p1:number, p2:number):number {
    let result = p1 + p2
    return result
  }

  function userNameReturn(a:string):string{
    return a
  }

  userNameReturn("noman")

  let output = sum(2,3)
  console.log(output)

 // assion function to a variable
//annonymous function
 let add = (p1:number, p2:number):number=>{
    let result = p1 + p2
    return result
 }


 let myData = (myName:string, myAge:number,myFriend:string[])=>{

    console.log(`My name is ${myName} and my age ${myAge} and my friends are ${myFriend}`)
    // myFriend.forEach((a)=>{
    //     console.log(a)
    // })

 }

//argumengts 
 let myDetails = (myName:string,myAge:number,...more:any)=>{
    console.log(myName,myAge,more)
 }


 myDetails("Noman",23,"123456789","BSSE","Rawalpindi")

//  console.log(add(2,3))
// myData("noman",25,["ali","ahmed","noman"])



// [0,]
let arr1 = [2,5,-6, -7,8,9,0,-3,-2]

//find even number 

for (let i = 0; i<arr1.length; i++){
if(arr1[i]%2==0 && arr1[i]>0){
console.log(arr1[i])
}
}


console.log("odd number")

//find odd 
for (let i = 0; i < arr1.length; i++) {
   if(arr1[i]%2!=0 && arr1[i]>0){
         console.log(arr1[i])
   }
}
//find sum of all numbers

let sumOfArrayElement:number= 0
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>0)
        sumOfArrayElement = sumOfArrayElement + arr1[i];
}
console.log(sumOfArrayElement)


//find max number
//[2,5,-6, -7,8,9,0,-3,-2]
let maxNumber:number= arr1[0]

for(let i=0;i<arr1.length;i++){
    if(arr1[i]>maxNumber){
        maxNumber = arr1[i]
    }

}

console.log(maxNumber)


//using Math.max

for (let i = 0; i < arr1.length; i++) {
    maxNumber = Math.max(...arr1)
}
console.log("max ", Math.max(1, 2));
// console.log(maxNumber)
//

//find max using reduce method

let max= arr1.reduce((a,b)=>Math.max(a,b))

console.log(max, "using reduce method") 


