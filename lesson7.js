
// Task1

let person1 = [];
iteration_num1 = 1;
let min = 1;
let max = 6;
function getRandomArbitrary(min, max) {
    return result1 = (Math.round(Math.random() * (max - min) + min));
  }
    while (iteration_num1 <= 3) {
        person1.push(getRandomArbitrary(min, max));
        console.log(person1);
        iteration_num1++;
      };
      let sum1 = person1.reduce(function(a, b) {
        return a + b;
    });
    console.log(sum1);


let person2 = [];
iteration_num2 = 1;

    while (iteration_num2 <= 3) {
        person2.push(getRandomArbitrary(min, max));
        console.log(person2);
        iteration_num2++;
      };
      let sum2 = person2.reduce(function(a, b) {
        return a + b;
    });
    console.log(sum2);

    switch (true) {
        case (sum1 < sum2):
            console.log('Person Two is winner!');
          break;
        case (sum1 > sum2):
            console.log('Person One is winner!');
          break;
        case (sum1 === sum2):
            console.log('The game ends up in a draw');
          break;
      }
    


      
// Task2

let arrFridays = [];

for (let year = 2000; year <= 2022; year++) {
    for (let month = 1; month < 13; month++) {
        let date = new Date(Date.UTC(year, month, 13));
        if (date.getDay() === 5) {
            arrFridays.push(date);
        }
    }
};

console.log(arrFridays.length);


// Task3

let min3 = 0;
let max3 = 15;

Arr3 = [];
Arr3Round = [];


function getRandomArbitraryThree(min3, max3) {
    return trunc = (Math.random() * (max3 - min3) + min3).toFixed(2);

  };

function getRandomArbitraryThreeRound(min3, max3) {
    return Math.round(Math.random() * (max3 - min3) + min3);
  };

let number = 15;

do {
    a = getRandomArbitraryThree(min3, max3);
    b = getRandomArbitraryThree(min3, max3);
    c = getRandomArbitraryThree(min3, max3);
        if (number === a + b +c) {
            Arr3.push(a,b,c);
            console.log(Arr3);

        }
  } while (number !== a + b +c);

do {
    a = getRandomArbitraryThreeRound(min3, max3);
    b = getRandomArbitraryThreeRound(min3, max3);
    c = getRandomArbitraryThreeRound(min3, max3);
        if (number === a + b +c) {
            Arr3Round.push(a,b,c);
            console.log(Arr3Round);

        }
  } while (number !== a + b +c);


//Task 3 - another solution

  function splitNumberIntoRandomParts(number, partsCount) {
    let resultRound = [];
    for (let i = 0; i < partsCount - 1; i++) {
      resultRound.push(Math.floor(Math.random() * number));
    }
    resultRound.push(number - resultRound.reduce((acc, val) => acc + val, 0));
    return resultRound;
  }
 let parts = splitNumberIntoRandomParts(15, 3);
console.log(parts);

