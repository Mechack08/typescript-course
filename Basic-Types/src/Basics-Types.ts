// /* Type Aliases */

// type MyType = 25 | 35 | 45 | 75;

// let discount: MyType = 25;

// /* ============================== */

// type MyCoursesType = {
//   name: string;
//   price: number;
// };

// const tsCourse: MyCoursesType = {
//   name: "TS BootCamp",
//   price: 29.99,
// };

// const jsCourse: MyCoursesType = {
//   name: "JS BootCamp",
//   price: 59.99,
// };

/* RECURSIVE TYPES */
// type RecursiveArr = number | RecursiveArr[];

// let myArr: RecursiveArr = [1, 2];
// let myArr1: RecursiveArr = [1, 2, [3]];
// let myArr2: RecursiveArr = [1, 2, [3, 4, [5]]];
// let myArr3: RecursiveArr = 1;

/* Type Assertion (Casting) */
// type Employee = {
//   id: number;
//   name: string;
//   departement: string;
// };

// const employee: Employee = {
//   id: 1,
//   name: "Mechack",
//   departement: "Computer",
// };

// let hiredEmployee: string = JSON.stringify(employee);
// console.log(typeof hiredEmployee);

// function getEmployee(employee: string) {
//   // Return any, bcz ts doesn't kno the type
//   //   return JSON.parse(employee);
//   /* old way of doing to make ts know the type */
//   //   return <Employee>JSON.parse(employee);
//   /* new way of doing */
//   return JSON.parse(employee) as Employee;
// }

// console.log(getEmployee(hiredEmployee));

/* Union Type */

// const tip = (billAmount: number, tipPercentage: number | string): number => {
//   if (typeof tipPercentage === "number") {
//     return billAmount * tipPercentage;
//   } else {
//     const calculatedTp = (billAmount * parseInt(tipPercentage)) / 100;
//     return calculatedTp;
//   }
// };
// console.log(tip(150, 0.15));
// console.log(tip(150, "20"));

/* Intersection Type */

// type ProductProperties = {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   stock: number;
// };

// type ProductDiscount = {
//   discount(): void;
// };
// type ProductSeasonSales = {
//   holidays(): void;
// };
// type ProductSubscription = {
//   subscription(): void;
// };
// type ProductShipping = {
//   shipping(): void;
// };

// type Product = ProductProperties &
//   ProductDiscount &
//   ProductSeasonSales &
//   ProductSubscription &
//   ProductShipping;

// const projector: Product = {
//   id: 1,
//   name: "Epson Projector",
//   category: "Epson",
//   price: 720,
//   stock: 12,
//   discount: () => {},
//   holidays: () => {},
//   subscription: () => {},
//   shipping: () => {},
// };

/* Function Type */

// let productName: (message: string) => string;

// productName = (message) => message;
// console.log(productName("Helicopter"));

/* Object Type */
// type Product = {
//   name: string;
//   price: number;
//   readonly type: string;
//   released?: boolean;
// };

// const product: Product = {
//   name: "Mouse",
//   price: 15,
//   type: "Original",
// };

// product.released = true;
// console.log(product);

// const product2: Product = {
//   name: "Iphone 11",
//   price: 600,
//   type: "fake",
// };

// // product2.type = "Original";
// console.log(product2);

/* Challenge */
// const getTs = function (): string {
//   return "TS";
// };

// let ts: "TS" = getTs();
// console.log(ts);
