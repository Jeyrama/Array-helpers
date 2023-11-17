/*
This challenge is designed to test your ability to extend the functionality of built-in classes. 
In this case, we want you to extend the built-in Array class with the following methods: 
square(), cube(), average(), sum(), even() and odd().

Explanation:
  square() must return a copy of the array, containing all values squared
  cube() must return a copy of the array, containing all values cubed
  average() must return the average of all array values; on an empty array must return NaN
  sum() must return the sum of all array values
  even() must return an array of all even numbers
  odd() must return an array of all odd numbers

Note: the original array must not be changed in any case!

Example:
  let numbers = [1, 2, 3, 4, 5];

  numbers.square();  // must return [1, 4, 9, 16, 25]
  numbers.cube();    // must return [1, 8, 27, 64, 125]
  numbers.average(); // must return 3
  numbers.sum();     // must return 15
  numbers.even();    // must return [2, 4]
  numbers.odd();     // must return [1, 3, 5]
*/


// Solution

Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

// or

Array.prototype.square = function() {
  let squared = [];
  for (let i = 0; i < this.length; i++) {
    squared[i] = Math.pow(this[i], 2);
  }
  return squared;
}

Array.prototype.cube = function() {
  let cubed = [];
  for (let i = 0; i < this.length; i++) {
    cubed[i] = Math.pow(this[i], 3);
  }
  return cubed;
}

Array.prototype.sum = function() {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

Array.prototype.average = function() {
  if (this.length == 0) return NaN;
  return this.sum() / this.length;
}

Array.prototype.even = function() {
  let evens = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) evens.push(this[i]);
  }
  return evens;
}

Array.prototype.odd = function() {
  let odds = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 == 1) odds.push(this[i]);
  }
  return odds;
}