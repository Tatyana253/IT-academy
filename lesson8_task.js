//task1
let arr = [1,2,3,4,5,6];
const reversed = arr.reverse();

//task2
let arrMax = [3,67,15,29,77];

function getMaxOfArray(arrMax) {
    return Math.max.apply(null, arrMax);
  };

//task3
  let n = 1;
  let m = 5;
  let fib = getFibonacciArray(n, m);

  function getFibonachi(n) {
    return n <= 1 ? n : getFibonachi(n - 1) + getFibonachi(n - 2);
};

function getFibonacciArray(n, m) {
    let fib = [];
    for (let i = 0; i < m; i++) {
      fib.push(getFibonachi(n + i));
    }
    return fib;
  };

  getFibonacciArray(n, m);

//task4

  let first = 3487;
  let second = 3794;

  function compare(first, second) {
  let matchingPositions = 0;
  let matchingValues = 0;
  let firstArray = first.toString().split("").map(Number);
  let secondArray = second.toString().split("").map(Number);

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      matchingPositions++;
    } else {
      if (secondArray.includes(firstArray[i])) {
        matchingValues++;
      }
    }
  }

  return {
    matchingPositions,
    matchingValues,
  };
};
let result = compare(first, second);

console.log("Matching positions:", result.matchingPositions);
console.log("Matching values:", result.matchingValues);

//task5
let newArray = [4, 2, 5, 1, 3];
let newArraytoMax = newArray.sort(function(a, b) {
  return a - b;
});

let newArraytoMin = newArray.sort(function(a, b) {
    return b - a;
  });

//task6
let newArraySix = [4, 2, 2, 5, 1, 1, 3];
var unique = newArraySix.filter((value, index, array) => array.indexOf(value) === index);

