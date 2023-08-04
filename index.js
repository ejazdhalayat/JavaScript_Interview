// console.log("Connected!")

//map, filter and reduce 
//Q1 - Return only name of students in Capital

// let students = [
//      {name: "Piyush", rollNumber: 31, marks: 80 },
//      {name: "Jenny", rollNumber: 15, marks: 69 },
//      {name: "Kaushal", rollNumber: 16, marks: 35 },
//      { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ];

//using for loop
// let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase());
// }
// console.log(names)

//using map
// const names = students.map((stu) => stu.name.toUpperCase());
// console.log(names)

//Q2 - return only name of students whose number is greater tha 35
// const names = students.filter((stu) => stu.marks > 35);
// console.log(names)

//Q3 - more than 60 marks and rollnumber greater than than 15
// const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15 );
// console.log(details)

//Q4 - sum of marks of all students
// const sum = students.reduce((acc, curr) => acc + curr.marks , 0);
// console.log(sum)

//Q5 - Return only names of students who scored more thhan 60
// const sum = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
// console.log(sum)

//Q6 - Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
// const totalMarks = students.map((stu) => {
//      if (stu.marks < 60) {
//            stu.marks += 20
//      }
//      return stu;
// } ).filter((stu) => stu.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);
// console.log(totalMarks)

//Functions in Javascript

// Q1 - What is Function Declaration?
// function square(num) {
//      return num * num;
// }

//Q2 - What is Function Expression?
// When you store a function inside a variable is called FE.
// const square = function (num){  //This is called Anonymous function, the function which has no name. And this can be assigned to variable.
//      return num * num;
// }
// console.log(square(5));

//Q3 - What are first class function?
// Where a function can be treated like a variable or assigned to variable and we can pass in another function is called First Class Function.
// function square(num) {
//      return num * num;
// }
// function displaySquare(fn) {
//      console.log("Square is " + fn(5));
// }
// displaySquare(square);

//Q4 - What is IIFE?
//IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern used to create and execute a function immediately after its declaration. 
// (function square(num) {
//      console.log(num * num);
// })(5);

//Q6 - IIFE - O/p Based question?
// (function (x) {
//      return (function (y){
//           console.log(x); //1
//      })(2);
// })(1);

//Q7 - Function Scope O/p based question.
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }  // O/p is : 0 1 2 3 4 

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// } // O/p : the loop will keep running

//Q8 - Function Hoisting - O/P Based Question
// var x = 21; //Global Scope

// var fun = function () {
//     console.log(x);
//     var x = 20;
// };
// fun();

// When fun() is called, it tries to log the value of the variable x. However, since there is a variable x declared inside the function using var x = 20;, JavaScript considers it as a local variable that shadows the global x.
// At this point, the local variable x is declared but not yet assigned a value, so it is in the "temporal dead zone." When trying to log its value, it will result in undefined.

// Q9 - Params vs Arguments

// function square(num) { //Params : (Params) are variables declared in a function's definition to receive values.
//     console.log(num * num);
// }
// square(5); //Argumets : The actual values passed to a function when it is called.

// function multiply(...num) { //rest operator. 
//     console.log(num[0] * num[1]);
// }
// var arr = [5, 6];
// multiply(...arr); //spread operator

// const fn = (a, ...numbers, x, y) => {  //Uncaught SyntaxError: Rest parameter must be last formal parameter
//     console.log(x, y)
// }
// fn(5,6,3,7)

// const fn = (a, x, y, ...numbers) => {
//     console.log(x, y, numbers)
// }
// fn(5,6,3,7,8,9) // O/P : 6 3 (3) [7, 8, 9]

// Q10 - Callback Function
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// document.addEventListener("click",function (params) {

// })

// Q11 - Arrow functions

// const add = function (firstNum, secondNum) {  //Normal Function
//     return firstNum + secondNum;
// };

// const add = (firstNum, secondNum) => {  //Arrow function
//     return firstNum + secondNum;
// };

const add = (firstNum, secondNum) =>  firstNum + secondNum ; //Arrow function
    

