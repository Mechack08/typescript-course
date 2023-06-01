// let coursePrice: number = 29.99;

// let courseName: string = "Typescript Bootcamp";

// let passed: boolean = true;

// // console.log(courseName, coursePrice);

// /* ==================== ARRAYS IN TYPESCRIPT ==================== */
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
// // console.log(numbers);

// let strings: string[] = ["Hey", "Hi", "Hello"];
// // console.log(strings);

// let mixed1: (string | number)[] = [1, 2, 3, "Hi", "Hey"];
// // console.log(mixed1);

// let mixed2: (string | number | boolean)[] = [1, 2, 3, "Hi", "Hey", true, false];
// // console.log(mixed2);

// let myNum: number[][] = [[1], [2, 3]];
// // console.log(myNum);

// let myString: string[][] = [["Hi"], ["Hello"]];
// // console.log(myString);

// let myNumString: (string[] | number[])[] = [
//   [1, 2],
//   [3],
//   ["Hey", "There"],
//   ["Hello"],
// ];
// // console.log(myNumString);

// /* Tuple */
// let myTuple: [string, number] = ["CSS HTML JAVASCRPT COURSE", 150];
// // console.log(myTuple);

/* ======================= END ======================= */

/* ==================== ENUM TYPES ==================== */
// enum RollNumbers {
//   mikel,
//   aliam,
//   alex,
//   ruben,
//   kobius,
// }
/* const enum RollNumbers {
  mikel = 1,
  aliam,
  alex,
  ruben,
  kobius,
}

let studentRollNumbers1: RollNumbers = RollNumbers.kobius;
let studentRollNumbers2: RollNumbers = RollNumbers.mikel;

console.log(studentRollNumbers1);
console.log(studentRollNumbers2); */

/* String enum type */
/* const enum StudentDetails {
  Name = "Florence",
  Major = "Business",
}

let studentName: StudentDetails = StudentDetails.Name;
let studentMajor: StudentDetails = StudentDetails.Major;

console.log(studentName, studentMajor); */

/* Heterogeneous enum */
const enum StudentDetails {
  ID = 1,
  Name = "Florence",
  Major = "Business",
}

let studentID: StudentDetails = StudentDetails.ID;
let studentName: StudentDetails = StudentDetails.Name;
let studentMajor: StudentDetails = StudentDetails.Major;

console.log(
  `Student No ${studentID} : ${studentName} has a Major in ${studentMajor}`
);

/* ======================= END ======================= */
