// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const changeSomething = () => {
  let something = "";
  return () => {
    something += " word";
    return something;
  };
};

let closureTest = changeSomething();
console.log(closureTest());
console.log(closureTest());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let initial = 0;
  return () => {
    initial++;
    return initial;
  };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  let counterObject = {
    increment: function() {
      counter++;
      return counter;
    },
    decrement: function() {
      counter--;
      return counter;
    }
  };
  return counterObject;
};

let anotherNewCounter = counterFactory();
console.log(anotherNewCounter.decrement());
console.log(anotherNewCounter.decrement());
console.log(anotherNewCounter.increment());
console.log(anotherNewCounter.increment());
console.log(anotherNewCounter.increment());
