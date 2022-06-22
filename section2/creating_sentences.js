// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Coding!'

let words = ["This", "is", "JavaScript", "Coding!"];

// TODO: Create an empty string variable called "sentence".
var sentence = "";
//I couldn't figure out how to make the function work as intended without giving the variable sentence a value, so I opted to design it another way. I would be interested to know the correct way of doing it in the future.

// TODO:
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".

function createSentence(array) {
  for (let i = 0; i < array.length; i++) {
    sentence += array[i] + " ";
  }
  return sentence;
}

// function createSentence(array) {
//   for (let i = 0; i < array.length; i++) {
//     sentence += array[i] + " ";
//   }
//   return sentence;
// }
// TODO: Call the function "createSentence" using the console.log method.
console.log(createSentence(words));
