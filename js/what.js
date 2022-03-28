// // const todos = [
// //   {
// //     id: 1,
// //     text: "Kill",
// //     isCompleted: true,
// //   },
// //   {
// //     id: 2,
// //     text: "Your",
// //     isCompleted: true,
// //   },
// //   {
// //     id: 3,
// //     text: "Self",
// //     isCompleted: false,
// //   },
// // ];

// // for (let i = 0; i < todos.length; i++) {
// //   let todo = todos[i];
// //   console.log(todo.text);
// // }

// // for (let todo of todos) {
// //   console.log(todo.text);
// // }

// // // forEach, map, filter

// // // todos.forEach(function (todo) {
// // //   console.log(todo.text);
// // // });

// // // const todoText = todos.map(function (todo) {
// // //   return todo.text;
// // // });
// // // console.log(todoText);

// // // const todoTrue = todos
// // //   .filter(function (todo) {
// // //     return todo.isCompleted === true;
// // //   })
// // //   .map(function (todo) {
// // //     return todo.text;
// // //   });

// // // console.log(todoTrue);

// // const x = 11;

// // const color = x > 10 ? "red" : "blue";

// // switch (color) {
// //   case "red":
// //     console.log("color is red");
// //     break;
// //   case "blue":
// //     console.log("color is blue");
// //     break;
// //   default:
// //     console.log("color is not red or blue");
// // }

// // const addNums = (num1) => num1 + 5;

// // console.log(addNums(5));

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function () {
//       return this.dob.getFullYear();
//     };
//     this.getFullName = function () {
//       return `${this.firstName} ${this.lastName}`;
//     };
//   }
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// const person1 = new Person("Ivan", "Kupala", "1-1-2001");

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// Single element
const form = document.getElementById("my-form");
const h = document.querySelector("h1");
console.log(h);
console.log(form);

// Multiple element
console.log(document.querySelectorAll(".item"));
