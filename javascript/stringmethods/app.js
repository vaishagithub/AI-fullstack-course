//String length

let x = 'welcome';
let length = x.length;
console.log(length);

//String charAt

let y='welcome';
let length1 = y.charAt(4);
console.log(length1);

//string charCodeAt

let z='welcome'
let length2=z.charCodeAt(4);
console.log(length2);

//string charCodeAt

let a='welcome'
let length3=a.codePointAt(4);
console.log(length3);

//string concat

let text1 = 'good';
let text2 =  'morning';
let text3 =  text1.concat(' ',text2);
console.log(text3);

//string at - get the third letter of name

let name1 = 'welcome';
let letter4 = name1.at(3);
console.log(letter4);

//string []

let name2 = 'hello';
let char = name2[3];
console.log(char);

//slice () --This methode takes 2 parameters: start position and end position(end not included)

let text4 = 'welcome';
let text5 = text4.slice(0,4);
console.log(text5);

//substring()
let text6 = 'welcome';
let text7= text6.substring(0,4);
console.log(text7);

//toUpperCase 

let name3 = "good night";
let name4 = name3.toUpperCase();
console.log(name4);

//toLowerCase

let name5 = "GOOD NIGHT";
let name6 = name3.toLowerCase();
console.log(name6);

// string isWellFormed()--This method returns true if a string is  well formed.otherwise it returns flase.
//true

let text = "Nice day"
let result = text.isWellFormed();
console.log(result);

//false

let tet = "Nice day \uD900"
let result2 = tet.isWellFormed();
console.log(result2);

//trim()--This method removes whitespace from both side of a string:

let tet1 = "     welcome    "
let result3 = tet1.trim();
console.log(result3);

//trimtart()--This methods remove whitespace only from the start of a string

let tet2 = "     welcome    "
let result4 = tet2.trimStart();
console.log(result4);

//trimend() --This method remove whitespace only from the end of a string;

let tet3 = "     welcome    "
let result5 = tet3.trimEnd();
console.log(result5);


 //padStart()
 let tex = '6';
 let tex1 = tex.padStart(5 , '8');
 console.log(tex1);

 //padEnd();

  let tex2 = '6';
 let tex3= tex2.padEnd(5 , '8');
 console.log(tex3);

 //repeat();
 let tet4 = " world!";
let result7 = tet4.repeat(2);
console.log(result7);

//replace

let b = 'have a nice day';
let c = b.replace('nice','good');
console.log(c);

//split();

let d = "welcomehello";
let e = d.split(",");
console.log(e);
let f = d.split('');
console.log(f);
let g = d.split('|');
console.log(g);