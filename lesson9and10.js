 //task1
 
  let promiseOne = new Promise((res) => {
    setTimeout(() => {
   return res(1);
   },Math.floor(Math.random() * 5000) + 1000);
 });

 let promiseTwo = new Promise((res) => {
    setTimeout(() => {
   return res(2);
   },Math.floor(Math.random() * 5000) + 1000);
 });

 let promiseThree = new Promise((res) => {
    setTimeout(() => {
   return res(3);
   },Math.floor(Math.random() * 5000) + 1000);
 });
 
 Promise.race ([promiseOne, promiseTwo, promiseThree]) 
 .then (res => {
    console.log(res);
 });


 //task2

  function getNum() {
    return new Promise((res) => {
        setTimeout(() => {
            const result1 = Math.floor(Math.random() * 5) + 1;
            res(result1)
            console.log(result1)
            },3000);
          });
    }

async function resultSquared() {
    let newVar = await getNum()
    let squaredVar = newVar ** 2;
    console.log(squaredVar);
}
resultSquared();



//task3


function getNum1() {
    return new Promise((res) => {
        setTimeout(() => {
            const result1 = Math.floor(Math.random() * 5) + 1;
            res(result1)
            },3000);
          });
    }


function getNum2() {
    return new Promise((res) => {
        setTimeout(() => {
            const result2 = Math.floor(Math.random() * 5) + 6;
            res(result2)
            },5000);
          });
    }


async function result() {
    const res1 = await getNum1();
    const res2 = await getNum2();
    let sum = res1 + res2;
    console.log(sum);
};
result();
