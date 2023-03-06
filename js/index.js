// QUESTION 1
// Differences between mutating array methods and non-mutation array methods in JavaScript.

// ANSWER: 

/* 
1) Mutating methods are those that modify the array they are called on. 
If you call a mutating array method, the array will be changed because this method add or remove elements 
from the array, or modify existing elements.
2) Mutating methods tend to be faster than non-mutating methods, as they don’t need to create a new array, but require more caution when used.

Examples include: push(), pop(),  shift(), unshift(), and splice().

1) Non-mutating methods are those that don’t modify the array they are called on. 
If you call a non-mutating array method, the original array will remain unchanged because these methods create 
a new array from the elements of the original array, but do not modify the original array.
2) Non-mutating methods are slower, but can be easier to understand and debug.

Examples include: map(), filter(), concat(), slice() and reduce()
                  
 */

// QUESTION 2
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add ‘Kotlin’ to the end of the array

languages.push('Kotlin');
console.log(languages);  // [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

// Add ‘Java’ after ‘Ruby’

languages.splice(3, 0, 'Java');
console.log(languages);  //[ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// Remove the first item in the array

languages.shift();
console.log(languages);   //[ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// Add ’Scala’ and ‘Swift’ to the beginning of the array

languages.unshift('Scala', 'Swift');
console.log(languages); 
/* [
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'PHP',
  'Python',     'Kotlin'
]*/

// Replace ‘PHP’ with ‘Go’ and ‘Rust’

languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

/*[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'Go',
  'Rust',       'Python',
  'Kotlin'
] */

//QUESTION 3

// What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

        console.log(changeFruit(fruit));
// fruit = ['apple', 'mango', 'orange'];

// QUESTION 4

/* Write a function that accepts an array of numbers as an argument. 
Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10 */


function arrayOfNumbers (arr){
    let max = arr[0];
    
    for (let i = 1; i <  arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    } return 'Maximum value is ' + max;
}

let arr = [30, 3, 9, 50, 77, 5];
console.log(arrayOfNumbers(arr));

// QUESTION 5
/* 
Write a function called valTimesIndex which accepts an array of numbers 
and returns a new array with each value multiplied by the index it is at in the array: */

function valTimesIndex(arr){
    return arr.map(function(value,index,array){
        return value*index
    });
}

let array  = [1, 2, 3];
console.log(valTimesIndex(array));