//advance

//reverse

let s= "GoodMorning"
const c = s.split('').reverse().join('');
console.log(c);

//without using reverse methode
function reverstring(str){

 let reverse="";
for(let i= str.length-1; i>=0; i--){
   reverse += str[i];
}
   return reverse;
}
reverstring("niceday");


//create a function that returns the largest number in an array
const numbers = [45,12,78,23,90,56];
let largest = numbers[0];
console.log(largest);//largest 45
//lets check all the other numbers one by one

for(let i=0;i<numbers.length;i++){
    console.log("check the number:" + numbers[i]); // this line output check the number:45
// app.js:28 check the number:12
// app.js:28 check the number:78
// app.js:28 check the number:23
// app.js:28 check the number:90
// app.js:28 check the number:56
if(numbers[i] > largest){
    largest = numbers[i];
    console.log("largest number is:" + largest)
}

}
//using methods for largest number
const num = [45,34,2,78,98,12];
const max =Math.max(...num);
console.log(max);

//write a custom 'mymap' function like Array.mymap

const number1=[65,44,12,4];
const newar = numbers.map(myFunction);
function myFunction(num){
    return num * 10;
}
console.log(newar);

//create afunction to check if a string is palindrome.

 function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    if(reversed === str){return true};
    return false
 }
 console.log(isPalindrome("madam"));
 console.log(isPalindrome("ratan"));

 //create a function that counts vowels in a string

//example1

function countvowels(str){
    //find the count of vowels
    const vowels = str.match(/[aeiou]/gi).length;
    //return number of vowels
    return  vowels
    }
    
    //take input
    // const input = prompt("Enter a string:");
    // console.log(countvowels(input))

//example2

const vowel = ['a','e','i','o','u'];

function countvowel(str){
    let count = 0;
    for(let letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++;
        }
    }
    return count
}
// const input2=prompt("Enter a letter:");

// console.log(countvowel(input2));

//use  ternary operator to check age >18 and print 'adult' or 'minor';

let age=30;

let age2 = age > 18 ?  "adult " : "minor";
console.log(age2);

//created nested object and print oe inner property

const details = {
    name1:"Technology solution",
    address:{
        street:"xyz road",
        city:"chennai",
        code:650394,
    },
    departments: [ 
        {
            name3:"IT",
            employess:20,
        },
        {
            name3:"HR",
            employees:20,
        }
    ]
};
console.log(details.address.code);
//access and print an inner property from an array of object

console.log(details.departments[1].name3);

//8.use forEach to print all elements of an array;

const veg=['potato','tomato','brinjal','onion'];
veg.forEach(vegs=>{
    console.log(vegs);
})

//create a function that sums all numbers in array using reduce.
const items = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 },
  { name: 'Mango', price: 3 },
];
const price = 0;
const totalprice = items.reduce((accumulator,item) =>{
    return accumulator += item.price;
},0)

//combine two arrays using spread operator.
const array1 =[1,2,3,4];
const array2 = [5,6,7,8];
const array3 = [...array1,...array2];
console.log(array3);