// console.log("Connected!")

//map, filter and reduce 
//Q1 - Return only name of students in Capital

let students = [
     {name: "Piyush", rollNumber: 31, marks: 80 },
     {name: "Jenny", rollNumber: 15, marks: 69 },
     {name: "Kaushal", rollNumber: 16, marks: 35 },
     { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

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
const square = function (num){
     return num * num;
}