// type Course = {
//   name: string;
//   price: number;
// };

// type Product<T> = { [K: string]: T };

// function getCoursesInfo<T>(course: Product<T>) {
//   return course;
// }

// let courses = getCoursesInfo<Course>({
//   course_1: { name: "JS", price: 19.99 },
//   course_2: { name: "TS", price: 9.99 },
//   course_3: { name: "Python", price: 29.99 },
//   course_4: { name: "CSS", price: 19.99 },
// });
// console.log(courses);

/* --------------------------------------------------- */
// type Course = {
//   name: string;
//   price: number;
// };

// type Product = { [course in "JS" | "TS"]: Course };
// // type Product = { [course in string]: Course };

// function getCoursesInfo(course: Product) {
//   return course;
// }

// let courses = getCoursesInfo({
//   JS: { name: "JS", price: 19.99 },
//   TS: { name: "TS", price: 9.99 },
// });
// console.log(courses);

/* ============ RecordType ========== */
// type Course = {
//   name: string;
//   price: number;
// };

// // type Product = { [course in "JS" | "TS"]: Course };
// // type Product = { [course in string]: Course };
// type RecordTYPE<keyType extends string, keyValue> = {
//   [key in keyType]: keyValue;
// };

// function getCoursesInfo<U extends string, T>(course: RecordTYPE<U, T>) {
//   return course;
// }

// let courses = getCoursesInfo({
//   JS: { name: "JS", price: 19.99 },
//   TS: { name: "TS", price: 9.99 },
//   Python: { name: "Python", price: 9.99 },
// });
// console.log(courses);

/* =============== PICKTYPE =============== */
// interface Product {
//   name: string;
//   price: number;
//   rating: number;
//   released: boolean;
// }

// type PickTYPE<TYPE, TYPEKEYS extends keyof TYPE> = {
//   [KEY in TYPEKEYS]: TYPE[TYPEKEYS];
// };

// const course: PickTYPE<Product, "name" | "rating"> = {
//   name: "JS",
//   rating: 4.5,
// };

/* ================ READONLY TYPE ============== */
// type Product = {
//   name: string;
//   price: number;
// };

// type ReadOnlyTYPE<TYPE> = {
//   readonly [key in keyof TYPE]: TYPE[key];
// };

// const course: ReadOnlyTYPE<Product> = {
//   name: "TS",
//   price: 19.89,
// };
// // course.name = "JS";
// console.log(course);

/* ============= REQUIRED TYPE ================ */
// type Product = {
//   name: string;
//   price?: number;
//   rating?: number;
//   sales?: number;
// };

// type RequiredTYPE<TYPE> = {
//   [key in keyof TYPE]-?: TYPE[key];
// };

// const onlineCourse: RequiredTYPE<Product> = {
//   name: "TS",
//   price: 29.99,
//   rating: 4.7,
//   sales: 120,
// };

// const inPersoneCourse: Product = {
//   name: "Bigginer dev",
// };

/* ============= PARTIAL TYPE ================ */
type Product = {
  name: string;
  price: number;
  rating: number;
  sales: number;
};

const onlineCourse: Product = {
  name: "TS",
  price: 29.99,
  rating: 4.7,
  sales: 120,
};

type PartialTYPE<TYPE> = {
  [key in keyof TYPE]+?: TYPE[key];
};

const inPersoneCourse: PartialTYPE<Product> = {
  name: "Bigginer dev",
};

console.log(onlineCourse);
console.log(inPersoneCourse);
