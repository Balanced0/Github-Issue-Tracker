1. What is the difference between var, let, and const?

Ans:

Var:
Var is function scoped meaning if declared inside the function it can only be accessed from within the function but if declared at the beginning of the script it becomes global and can be called from anywhere. It can also be redeclared and reassigned.

let:
let is block scoped meaning it can be accessed from only within the curly brackets {}.
It cannot be redeclared but can be reassigned.

const:
const is also block scoped like let but it cannot be redeclared or reassigned.

----------------------------------------------------
2. What is the spread operator (...)?

Ans:

The spread operator expands elements of an array or object into individual elements.
It is generally used for copying or merging arrays or copying objects.
For example:
Suppose we have an array of numbers like 
const arr = [1, 2, 3];
Now if we want to add it to other elements like
const new_arr = [arr, 4, 5]; (This will become nested array)
Even if you do this 
const new_arr = arr (will take the exact reference of that array)
but if we do const new_arr = [...arr, 4, 5];
we will get output like [1, 2, 3, 4, 5].

----------------------------------------------------
3. What is the difference between map(), filter(), and forEach()?

Ans:

map():
map() creates a new array by transforming each element of the original array. We can transform each element of the existing array here and store it in the new array.
For example:
const arr = [1,2,3];
const new_arr = arr.map(n => n * 2);
It will output [2, 4, 6]

filter():
filter() also creates a new array but only keeps the elements in the new array that match a certain condition.
For example:
const arr = [1,2,3,4];
const new_arr = arr.filter(n => n % 2 === 0);
Output will be [2, 4]

forEach():
It is only a loop, it executes a function for each element but does not return anything.
For Example:
arr.forEach(n => console.log(n));

----------------------------------------------------
4. What is an arrow function?

Ans:

An arrow function is a shortcut way to write a function, introduced in ES6.
For example:
function multiply(a, b){
  return a * b;
}

but with arrow function we can write like,
const multiply = (a, b) => a * b;

----------------------------------------------------
5. What are template literals?

Ans:

Template literals allow us to write strings using backticks `` and also we can embed variables inside them.

For Example:
```
const name = "Alvi";
const age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);


