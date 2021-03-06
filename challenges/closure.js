// ==== Closures ==== 
console.log("==== Closures ====");

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
console.log("== Task 1: Study the code below and explain in your own words why nested function can access the variable internal. ==");
myFunction();

// Explanation: nestedFunction() is able to access the variable internal because of closure. It's a child function of myFunction() and it has access to variables from its parent's scope.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

console.log("== Task 2: Counter ==");
function sumation(number){
  let total = 0;
  for (let i = 0; i <= number; i++){
    total += i;
  }
  return total;
}
console.log(sumation(4));