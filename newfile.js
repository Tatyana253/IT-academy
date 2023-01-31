// task1

let string = '123123';

if (string[0] + string[1] + string[2] === string[3] + string[4] + string[5]) {

console.log('да')
} else {
    console.log('нет')
}

//task2

let n = 1000;
let iteration_num = 0;

do {
    n = n / 2;
    iteration_num++;
    console.log(iteration_num);
    console.log(n);
} while (n >= 50);

//task3

let arr = [12, 15, 20, 25, 59, 79];
const length = arr.length;
let sum = [12, 15, 20, 25, 59, 79].reduce(function(a, b) {
    return a + b;
});
//console.log(sum);

const average = (sum, length) => {
    return sum / arr.length;
};

//console.log(average(sum, length));



//task4

let arr4 = [1, 2, 3, 4, 5];

arr4.splice(3, 0, 'a', 'b', 'c');


//task5
let arr5 = [1, 2, 3, 4, 5];

arr5.splice(1, 0, 'a', 'b');

arr5.splice(6, 0, 'c');

arr5.push('e');

//task6

let arr6 = [3, 4, 1, 2, 7];
arr6.sort(function(a,b){ 
    return a - b
  });

