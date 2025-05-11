// console. log ("hello world");
// variable ;
// const (permanent);
// var (not in use again);
// let (can be reassign);
// primitive data type;

// strings  (can be used with) '' ""  ;
// ("my name is Funmi")('Funmi is my name');

// number 
// letmy Num = 64;

// boolen (true/ false);
//let  me =true;
// let you= false;

// null

// non primitive data types;

// arrary: can be string,object and number;
//const first array = {10, 20, 30, 40};
// const second array = [10, 'a string',{prop: "shola"}, [1,2] ;

// object: 
// const {
 // name: "Sarah" , 
 // my age:39 ,
 // sex: male,
// };

// Arimethic operator
// let b = 6;
// let c =3;

// addition 
// const (a+b);
// console.log (20);

// subtraction
// const (b-c);
// console.log (3);

// mulitiplication
// const (8*c);
// console.log (18);

// division
// const (b/c)
// console.log (2);

// modulus (gives us the remainder after dividing);
// let d = 4;
// let e =3;
// const (d % 3);
// console.log (1);

// increment (++)
//  const (d ++);
// console.log (5);

// decrement (--)
// const (e --);
// console. log  (4);

// Assigment operator
// letx = 10;
// x= x+5 =15

// +=, -=, *=, /=

// comparison operators
// ==, ====, !=, !==, 

// const a = "Bayo";
// const  b = "James"; 
// const c = "John";
// const  d = "James"; 
// const f = 45;
// const g = 50;
// const h = "45";
//const f= 43;

// console.log  (g > h)
//  Greater than

// console.log ( h < 50 )
// Less than

// console.log ( b== d )
// equal

// console.log ( h ==== f)
// strictly equal to

// console.log ( f <= h)
// less than equal to;

// console.log (h >= f)
// greater than equal to ;

// !==, !== (not)

// logical operators 
// && And ( one true turns all to false);
// || or (one true turns to become true at the end of te day);
// ! not (opposite of any answer);

// exercie 
// const result !((40/20) === 2 && true) || ("yes" === "no")
//const step1 = 40/20
// console.log  = 2;
//const step2 = step1 === 2;
// console. log step2 (true);
// const step3 = step2 && true
// console. log = (true);
// const step5 = "yes" === "no"
// console.log =(false)
//  const step6 =step3 || step 5
// console.step =(true)
// const step 7 = !(step6)
//console. log =(false)

// Condition 
// if ( "some string" === "another string ") {
  //  console.log ("the string ");}
    
  else {
    //console.log ('the string are not equal');

  }
  // the strings are not equal

// if condition (returns true)[]

// const firstnumber= 20;
// const secondNumber = 10;
// const jsExpression = firstNumber> secondNumber; // true

// if else statement () {} else []


// prompt
// prompt("enter your name")
// const myAge = prompt("enter your age")
// console.log (myAge)


let number= parseInt(prompt("enter your number"))
if (number%2===0){
    alert(`${number} is even`)
}
else{
    alert(`${number} is odd`)
}
/// write a program that transforms a numerical grade to a letter grade (e.g grade 0-39 should display "F", grade40-44 should dipaly "E", grade 45-49 shoild 
// display "D", grade 50-59 should display "c", grade 60-69 should display "B", grade 70-100 should display "A").

let grade = parseInt(prompt("Enter grade"));

if (grade >= 0 && grade <= 39) {
    alert(`your grade is F`)
 }
 else if (grade >= 40 && grade <= 44){
     alert (`your grade is E`)
 }
 else if (grade >=50 && grade <=59 ) {
    alert(`your grade is C`)
 }
 else if (grade >= 60 && grade <= 69 ) {
    alert(`your grade is B`)
 }
 if (grade >= 70 && grade <=100 ) {
    alert(`your grade is A`)
 };
// write a program to check whether a user entered year is  a leap year or not .

// let year = parseInt(prompt("Enter year"));
// if (year%2===0){
//     alert(`leap year`)
// }
// else {
//     alert(`Not a leap year`)
// }
// write a program that ask the userto enter a password and checks if it matchs
// a stored password using ===

// let password = parseInt(prompt("enter password"));
// if (password===1234){
//     alert(`valid`)
// }
// else{
//     alert(`Invalid`)
// }

//Write a program that calculates the ticket price based on age with the following 
// conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60
//  pay a ticket price of 20, age over 60 play a ticket price of 15.
// let  age = parseInt(prompt("enter your number"));

// if (age < 12 ) {
//   alert(`pay 5`)
// }
// else if (age < 18){
//   alert(`pay10`)
// }
// else if (age < 60){
//   alert(`pay20`)
// }
// else{
//   alert (`pay15`)
// }

//// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount 
// have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// let amount = parseInt(prompt("amount"))
// if (amount >= 100){
//     alert (`${amount}` * 0.2)
// }
// else if (amount >= 50){
//     alert (`${amount}` * 0.1)
// }
// else {
//     alert( "discount is 0")
// }



// Write a program that greets the user based on the time of day. 
// Display good morning, good afternnon or good evening based on the time of day when you run the code.

// let time = parseInt(prompt("enter a number"));

// if ( time >=1 && time <=12) {
//   alert( `Good morning `)
// }
// else if(time >=13 && time<=16){
//   alert(`Good afternoon`)
// }
// else if(time >=17 && time <=19){
//   alert(`Good evening`)
// }
// else {
//   alert(`Good night. Sleep well`)
// }

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give
//  players clues if their guess is higher, lower or correct.

 let number = parseInt(prompt("enter your guess"))

 if (number === 52){
     alert(`${number} is correct `)
 }
else if (number < 52){
     alert("you guess is lower")
 }
 else if (number > 52){
     alert("your guess is higher")
 }
 else {
     alert('try again')
}
 

// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: 
// weight / (height * height).
//Underweight (below 18.5), Healthy Weight (18.5 to 24.9), Overweight (25 to 29.9), and Obese (30 or greater)

let BMI = parseInt(prompt("enter a number"));
if (BMI <= 18.5 ){
  alert(`Underweight`)
}
else if (BMI <=24.9 ){
  alert(`${BMI}Healthy  Weight`)
}
else if(BMI <=29.9){
  alert(`Over Weight`)
}
else{
  alert(`Obese`)
}//Write a program that calculates the ticket price based on age with the following 
// conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60
//  pay a ticket price of 20, age over 60 play a ticket price of 15.
// let  age = parseInt(prompt("enter your number"));

// if (age < 12 ) {
//   alert(`pay 5`)
// }
// else if (age < 18){
//   alert(`pay10`)
// }
// else if (age < 60){
//   alert(`pay20`)
// }
// else{
//   alert (`pay15`)
// }

//// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount 
// have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// let amount = parseInt(prompt("amount"))
// if (amount >= 100){
//     alert (`${amount}` * 0.2)
// }
// else if (amount >= 50){
//     alert (`${amount}` * 0.1)
// }
// else {
//     alert( "discount is 0")
// }



// Write a program that greets the user based on the time of day. 
// Display good morning, good afternnon or good evening based on the time of day when you run the code.

// let time = parseInt(prompt("enter a number"));

// if ( time >=1 && time <=12) {
//   alert( `Good morning `)
// }
// else if(time >=13 && time<=16){
//   alert(`Good afternoon`)
// }
// else if(time >=17 && time <=19){
//   alert(`Good evening`)
// }
// else {
//   alert(`Good night. Sleep well`)
// }

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give
//  players clues if their guess is higher, lower or correct.

 let number = parseInt(prompt("enter your guess"))

 if (number === 52){
     alert(`${number} is correct `)
 }
else if (number < 52){
     alert("you guess is lower")
 }
 else if (number > 52){
     alert("your guess is higher")
 }
 else {
     alert('try again')
}
 

// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: 
// weight / (height * height).
//Underweight (below 18.5), Healthy Weight (18.5 to 24.9), Overweight (25 to 29.9), and Obese (30 or greater)

let BMI = parseInt(prompt("enter a number"));
if (BMI <= 18.5 ){
  alert(`Underweight`)
}
else if (BMI <=24.9 ){
  alert(`${BMI}Healthy  Weight`)
}
else if(BMI <=29.9){
  alert(`Over Weight`)
}
else{
  alert(`Obese`)
}v

//Write a program that checks if a given number is positive, negative, or zero.
// let number = parseInt(prompt("enter your number"))

// if (number > 0){
//   alert (`${number} is positive`)
// }
// else if (number === 0){
//   alert ("invalid number")
// }
// else if (isNaN (number)){
//   alert("not a number")
// }
// else {
//   alert (`${number} is negtive`)
// }









