let a= "Hello world";
console.log(a);
//alert("Good morning");

//create 3 variables using var,let, const explain difference

//It is function-scoped and can be re-declared and updated;(before ES6)

var name = "Lotus";
console.log(name) // lotus;

  var name = "Rose" //Redeclaration allowed
console.log(name ) //Rose;

if(true){
    var age=25; //function -scoped
}
console.log(age) // 25 (accessible outside block)

//Let

//It is  block-scoped(introducted in ES6)
//It can be updated, but cannot be redeclared within the same scope;

let city= "chennai";
console.log(city) //chennai

city="Trichy";//Allowed (updated)
console.log(city) //Trichy

//let city = "madurai" // Error (cannot re-declare in same scope);

if(true){
    let city = " coimbatore"; //Block scoped
    console.log(city); //coimbatore.
}
console.log(city)// Trichy (different scope);

//const

//const is also block-scoped but cannot ne re-assigned or re-declared.It must be initialized when declared.

const country = "India";
console.log(country);//India

//country="usa" // Error (cannot reassign)
//const country = "Japan";  //Error (cannot re-declare);

if(true){
    const country ="sri lanka";//srilanka
    console.log(country);
}
console.log(country);

//use let when the value will change
//use const when the value will not change;

//addition
const ai = 10;
const bi = 20;
const ci = ai + bi;
console.log(ci);
//subtaction

const di = 60;
const ei = 20;
const fi = di + ei;
console.log(ci);

//multiplication
const gi = 10;
const hi = 20;
const ji = gi * hi;
console.log(ji);
//division
const ki = 100;
const li = 20;
const mi = gi / hi;
console.log(mi);

//convert string to number

const fruit = "55";
const num1 = Number(fruit);

console.log(num1);
console.log(typeof(num1));

//convert number to string;

const fruit1 = 55;
const num2 = fruit1.toString();

console.log(num2);
console.log(typeof(num2));
//Create an object with your details(name,age,hobby) and print It

const details = {
 name :"xyz",
 age:30,
 hobby:"reading",

}
console.log(details.name);
console.log(details.age);
console.log(details.hobby);

//6.Create an array with 5fruits and print the 3rd fruit

const fruits= ["Apple","Mango","orange","Grapes","Pineapple"]
console.log(fruits[2]);

//write a function that takes a name and prints a greeting message.


function greeting(name){
    console.log(`Hello  guys  I am  ${name}`);
}
greeting("Rose");
greeting("Jasmine");

//use if-else to check if a number is positive,negative or zero

const num3 = 55;
if (num3 > 0 ){
    console.log("The number is positive")
}
else if(num3 < 0){
    console.log("The number is negative")

}
else{
    console.log("The number is 0")
}

//use switch to print day of week based on number(1=monday)

function day1(dayofweek){
switch (dayofweek){
    case "1" :
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
         alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("friday");
        break;
     case 6:
      alert("saturday");
        break;
        default:
           alert("Not a valid day");
           break

}
}

//create a simple loop to print a 1 t0 10 numbers
 

for( let i=1; i<=10; i++){
   
    console.log(i);
}

//Advanced 10 Tasks

//write a function that reverses a string;


const str="Hello world";
function reverse(str){
    
}