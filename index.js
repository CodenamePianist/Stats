// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  const number = numbers.length;
  return number;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = number + numbers[i];
  }
  return number;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = number + numbers[i];
  }
  return number / numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let i = 0;
  let number = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < number) {
      number = numbers[i];
    }
    }
    return number;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let i = 0;
  let number = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > number) {
      number = numbers[i];
    }
  }
    return number;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  //This will get the max of the array
  let i = 0;
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  //This will get the min of the array
  let j = 0;
  let min = numbers[0];
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] < min) {
      min = numbers[j];
    }
  }
  let number = max - min;
  return number;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  number = [];
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      number.push(numbers[i]);
    }
  }
  return number;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  number = [];
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) != 0) {
      number.push(numbers[i]);
    }
  }
  return number;
}
