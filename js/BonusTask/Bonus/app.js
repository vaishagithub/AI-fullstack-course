//build a function that return factorial of a number
 function factorial(n){
        if(n==0 || n==1){return 1};
        

        let result = 1;
        for(let i=2;i<=n;i++){
              result *=i;
        }
        return result;
 }

console.log(factorial(5));
//2 Write function that removes duplicate values from array.

let duplicate = ['1','2','3','4','5','4','5','35','35']
function removes(){
   let    duplicates =  new Set(duplicate);
   console.log(duplicates);

   let uniquearray = [...duplicates];
   console.log(uniquearray);

}
removes();

//3 Create a program that sort numbers ascending and descending

let arr = ['23','34','65','56','76','87','12','98'];
function sortNum(){
      const arr1 = [...arr];
      const ascending = [...arr1].sort((a,b)=>a-b);
      console.log(ascending);
       const decending = [...arr1].sort((a,b)=>b-a);
       console.log(decending);

}
sortNum();

//4.create a function that finds even and odd numbers in array

const array4 = ["2",'66','3','9','44','64','98','7','33'];
function evenodd(){
for(let i = 0; i < array4.length; i++){
if(array4[i]%2 === 0 ){
      console.log("The given array is even" + array4[i])
}
else{
      console.log("The given array is odd" + array4[i])
}
}
}
evenodd();

//example2
let numbers = [10, 23, 12, 21];

// Declaring empty Even array
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}

// Printing output
console.log

//write a function to merge two objects into one;
let people1 = {
      Name:'Rose',
      Age:30,
      Id:23-45-23-2345,
};
let people2 = {
      jobtitle:"Fullstack web developer",
      location:'chennai',
}
let people3 = {
      ...person1,...people2
}
console.log(people3);
//create a function that takes an array of names and returns only nastart()
function namestart(names){
      return names.filter(name=>name.toLowercase().startsWith('A'));

}
console.log(namestart('Alice','Bob','Andrew','Charlie'));


//create an arrow function to find square of numbers in array.

let a  = ['2','3','4','5'];
const square = (a)  => a*a;
console.log(square);


//use template literals to print your name,age and city

name1 = "Rose";
age = 30;
city = "Chennai";

console.log(`My name is ${name1} and age is ${age} living in ${city}`)
//create a function that filters prime numbers in array;


function isPrime(num){
      if(num<2) return false;
      //2 is prime
      if(num ==2 )return true;
      //Even numbers (except 2) are not prime 
      if(num % 2 === 0) return false;

      //check odd divisiors up tp square
      for(let i=3;i<=Math.sqrt(num); i +=2){
            if(num % i == 0) return false;
      }
}
function primes(numbers){
      return numbers.filter(num =>isPrime(num));
}
const numbs = ['2','3','4','5','6','7','8'];
const primes = primes(numbs);
console.log(primes);
//celsius to fahrenheit


function celfah(celsius){
      const fahrenheit = (celsius * 9/5) + 32;
      return fahrenheit;
}
const num = 44;
const num2 =celfah(num);
console.log(num2);


