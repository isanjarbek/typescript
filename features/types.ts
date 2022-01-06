// Annotation type - o'zgaruvchini turini aniqlash uchun
// Interface type - typescript o'zgaruvchini turini o'zi aniqlaydi.

// Annotation type
const age: number = 32; // number variable
const Name: string = "John"; // string variable
const isUpdated: boolean = true; // Boolean variable

function display(id: number, name: string) {
  console.log("Id = " + id + ", Name = " + name);
}

let employee: {
  id: number;
  name: string;
};

// arrays
let ninjas: string[] = ["ninja1", "ninja2"];
let numbers: number[] = [3, 2];

ninjas.push("ryu");
ninjas.push("chun-li");


// union types (o'zgaruvchi 1 tadan ortiq data type ga teng bo'ladi)
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(false);
mixed.push(20);
console.log(mixed);

// let uid: string | number;
// uuid = "123";
// uuid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: "ken", age: 20, beltColour: "black" };

// Function Basics
let greet: Function;
greet = () => {
  console.log("hello, again");
};

//  let greet: Function = () => {
//    console.log('hello, world');
//  }

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b); // 15 c? bo'lganligi uchun uning qiymaini berish ixtiyoriy
  console.log(c); // undefined
};
add(5, 10);

// const add = (a: number, b: number, c: number | string = 10): void => {
//   console.log(a + b);
//   console.log(c);
// }
// add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
  return a - b;
};
let result = minus(10, 7);
