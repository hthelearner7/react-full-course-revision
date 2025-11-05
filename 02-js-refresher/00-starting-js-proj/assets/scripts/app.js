// import /export  syntax - do not forget to add type="module" in your index.html file in script tag to use import/export syntax in js

// import value, { dummyValue1, dummyValue2 } from "./util.js";
// console.log({ dummyValue1 }, { dummyValue2 });
// console.log({ value });

// import * as util from "./util.js";
// console.log(util);
// console.log(util.dummyValue1);
// console.log(util.dummyValue2);
// console.log(util.default);

import { dummyValue1 as someValue } from "./util.js";
console.log(someValue);

// class and objects
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello, " + this.name;
    }
}

let user1 = new User("Mohan", 20);
console.log(user1);
console.log(user1.greet());

// arrays
const hobbies = ["reading", "cooking", "running"];
// push
hobbies.push("coding");
// map
const res = hobbies.map((h, i) => i + ". " + h);
console.log(res);
// findIndex
console.log(hobbies.findIndex((item) => item === "running"));

const userNameData = ["shyam", "ram"];
const fName = userNameData[0];
const lName = userNameData[1];
console.log(fName);
console.log(lName);

// but destructuring makes it easy
const [firstName, lastName] = userNameData;
console.log(firstName);
console.log(lastName);

const someUserData = {
    name: "max",
    age: "34",
};

// const { a, b } = someUserData; // incorrect
const { age, name } = someUserData; // correct -> you have to use same name
console.log(name, " -> ", age);

// you can use alias
const { userName: a, weight } = {
    userName: "max",
    weight: "70kg",
};
console.log(a, " -> ", weight);

// using destructuring in function parameters
function showDetails({ name, age }, x) {
    // destructuring
    console.log("name", name);
    console.log("age", age);
    console.log(x);
}
showDetails({ name: "ram", age: 10, weight: "70kg" }, "hello");

const oldHobbies = ["coding", "walking"];
const newHobbies = ["running", "cooking"];
const mergedHobbies = ["sports", ...oldHobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
    isAdmin: true,
    ...someUserData,
};
console.log(extendedUser);

// prompt
// const favColor = prompt("Enter your favourite color:");

// if (favColor === "yellow") {
//     console.log("yellow ranger");
// } else if (favColor === "orange") {
//     console.log("orange ranger");
// } else {
//     console.log("extra ranger");
// }

// for-of loop
const colors = ["red", "blue", "green", "pink", "yellow"];
for (let color of colors) {
    console.log(color);
}

function handleTimeout() {
    console.log("timed out");
}
const handleTimeoutTwo = () => {
    console.log("timed out again");
};

// passing function to an in-built function

// setTimeout(handleTimeout, 1000);

// setTimeout(handleTimeoutTwo, 2000);

// setTimeout(function () {
//     console.log("more timing out");
// }, 3000);

// setTimeout(() => {
//     console.log("more timing out 2");
// }, 4000);

// passing function to a custom-built function

function greet(greetFn) {
    greetFn();
}
greet(() => {
    console.log("hello");
});

function init() {
    function greet() {
        console.log("hi");
    }
    greet();
}
init();

// note: when dealing with strings, numbers, and Booleans, you always produce new values. You cannot edit existing values.

// This changes when you are dealing with objects and arrays, which technically, as mentioned before, are objects. If I have a hobbies array here with "sports" and "cooking", and I then use, for example, the push method, which is a built-in method to also add "working" to that array, I edited the original array.
// What's special about primitives in JavaScript is that we cannot edit them. I can, of course, overwrite userMessage and store "Hello" there, but that's a brand new string. The old string, which was stored in memory, will simply be thrown away. It is not edited to become this string.

// class, objects, arrow functions

// using normal functions
// class Person {
//     name = "Max";
//     printMyName() {
//         console.log(this.name); // this is required to refer to the class!
//     }
// }
// const person = new Person();
// person.printMyName();
// const fn = person.printMyName; // error
// fn();

// using arrow functions
class Person {
    name = "Max";
    // the arrow function does not have its own this. Instead, it lexically binds this from the surrounding scope — in this case, the class instance where it was created.
    printMyName = () => {
        console.log(this.name); // you can use this
    };
}

const person = new Person();
person.printMyName();
// with arrow function, Even if you pass the method around, it keeps pointing to the same this.
const fn = person.printMyName;
fn();
