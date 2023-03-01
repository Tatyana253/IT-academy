// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface User {
  name: string;
  age: number;
  occupation: string;
  car?: string;
  children?: number;
}

const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    car: "VW",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
    children: 2,
  },
];

function returnUser(user: User): void {
  console.log(
    `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`
  );
  if (user.car) {
    console.log(`Car: ${user.car}`);
  }
  if (user.children) {
    console.log(`Children: ${user.children}`);
  }
}

users.forEach(returnUser);

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

// 3. Напишите анотации типов к этому классу.
interface ObjectManipulatorInterface {
  set(key: string, value: string): object;
  get(key: string): string | number | boolean;
  delete(key: string): object;
  getObject(): object;
}

export class ObjectManipulator implements ObjectManipulatorInterface {
  constructor(protected obj: object) {}

  public set(key, value) {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get(key) {
    return this.obj[key];
  }

  public delete(key) {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject() {
    return this.obj;
  }
}

// 4. Обеспечьте правильную типизацию для указанных функций.

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */

export function map(mapper: (value: number, index: number, array: number[]) => number, input: number[]): number[] | Function {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: number[]): number [] | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer: (value: number, index: number, array: number[]) => number, input: number[]): number[]| Function  {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: number[]): number[] | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input.filter(filterer);
}

/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b: number): number| Function {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB: number): number | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b;
}
