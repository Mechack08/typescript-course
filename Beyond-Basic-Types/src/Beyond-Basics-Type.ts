/* Index SIgnature */
// type Product = {
//   [k: string]: string;
// };

// const list: Product = {
//   student: "many",
//   books: "not much",
// };
// console.log(list);

/* ---------------- Indexed Access Types ------------ */
/* type Product = {
  name: string;
  price: number;
  moreInfos: {
    released: boolean;
    beginnerFrendly: boolean;
    level: string;
  };
};

const getCourse = function (
  name: string,
  price: number,
  moreInfos: Product["moreInfos"]
): Product {
  return { name, price, moreInfos };
};

const course: Product = getCourse("JS Advanced", 19.99, {
  released: true,
  beginnerFrendly: true,
  level: "Beginner-Advanced",
});
console.log(course);

const myName: Product["name"] = "Kobius";
const courseLevel: Product["moreInfos"]["level"] = "Beginner";
console.log(courseLevel); */

/* ---------- Partial Type -------------------- */
// type Product = {
//   name?: string;
//   price?: number;
// };
// const course: Product = { name: "TS" };

// type Product = {
//   name: string;
//   price: number;
// };

// const course: Partial<Product> = { price: 22 };
// console.log(course);

// type Product = Partial<{ name: string; price: number }>;

// const course: Product = { price: 22 };
// console.log(course);

/* ------------- Readonly Type ------------------------ */
// type Product = Readonly<{ name: string; price: number }>;
// const course: Product = { name: "JS", price: 50 };
// // course.name = "TS"

/* ------------- Combine Readonly and Partial Types ------ */
// type Product = {
//   name: string;
//   price: number;
// };

// const course: Partial<Product> & Readonly<Product> = { name: "TS", price: 22 };
// console.log(course);
// course.name = "JS";
// console.log(course.name);
/* Does not work */

/* --------------- Shared Fields -------------------- */
// type Product = {
//   name: string;
//   price: number;
//   sales: number;
//   availability: boolean;
//   category: string;
// };
// type Course = {
//   name: string;
//   price: number;
//   sales: number;
//   released: boolean;
//   rating: number;
// };
// const course: Product | Course = {
//   name: "TS",
//   price: 22.99,
//   sales: 200,
//   availability: true,
//   category: "online",

//   released: true,
//   rating: 5.0,
// };

// /* ---------------------------------- */
// type DigitalProduct = {
//   name: string;
//   price: number;
//   sales: number;
// };
// type Product = DigitalProduct & {
//   availability: boolean;
//   category: string;
// };
// type Course = DigitalProduct & {
//   released: boolean;
//   rating: number;
// };
// const course: Product | Course = {
//   name: "TS",
//   price: 22.99,
//   sales: 200,
//   availability: true,
//   category: "online",

//   // released: true,
//   // rating: 5.0,
// };
// console.log(course);

/* ---------------------------------- */
// type DigitalProduct = {
//   name: string;
//   price: number;
//   sales: number;
// } & (
//   | { availability: boolean; category: string }
//   | { released: boolean; rating: number }
// );

// const course: DigitalProduct = {
//   name: "TS",
//   price: 22.99,
//   sales: 200,
//   // availability: true,
//   // category: "online",

//   released: true,
//   rating: 5.0,
// };
// console.log(course);

/* ---------- Optional Chaining Operator ---------- */
// type Product = {
//   name: string;
//   info: ProductInfo | undefined;
// };
// type ProductInfo = {
//   level: string;
//   noOfStudent: number | undefined;
// };

// const courses: Product[] = [
//   { name: "TS", info: { level: "Beginner", noOfStudent: 3000 } },
//   { name: "JS", info: { level: "Advanced", noOfStudent: undefined } },
//   { name: "Python", info: undefined },
// ];

// console.log(courses.map((course) => course.info?.noOfStudent));
