//write a function that divide two numbers

function dividetwo (num1, num2){
  let result = num1/num2  
  console.log(result)

}
dividetwo(20, 2)

// write a function that checks if a number is even or odd
 function tocheckoddoreven(){
    const num = parseInt(prompt("enter a number"))
    if (num %2=== 0){
        alert("is even")
    }
    else{
     alert("is odd")
    }
 }
 tocheckoddoreven()

 // write a function to return the largest number
 function largestnumber(num1, num2, num3){

    num1= (prompt("enter a number"))
     num2 =(prompt("enter a number"))
     num3= (prompt("enter a number"))
     console.log (Math.max (num1, num2, num3))
 }
 largestnumber()
 
 //write a function that reverse a string
 function toreverse (input){
    input = "Alabi"
    return input.split('').reverse().join('');
 }
 console.log(toreverse("Alabi"))

 // find the longest of a word in a sentence
  function longestword () {
   const word = sentence.split('')
   let longestword = ''; 
   let maxlength = 0 ;
   for (let word of words){
      const input = word.replace
   }
     if(input.lenght> maxlength){
      maxlength = input.length
     }
     return longestword
  }
 const  sentence = " Tunde is the strongest boy"
 console.log("longestword")
 
// write a program to check the largest number in an array 
 function findLargestNumber(arr) {
  if (arr.length === 0) {
    return null; // Handle empty array
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example usage:
const numbers = [45, 2, 89, 32, 77, 101, 56];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);