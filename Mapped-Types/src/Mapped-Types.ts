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
type Course = {
  name: string;
  price: number;
};

type Product = { [course in "JS" | "TS"]: Course };
// type Product = { [course in string]: Course };

function getCoursesInfo(course: Product) {
  return course;
}

let courses = getCoursesInfo({
  JS: { name: "JS", price: 19.99 },
  TS: { name: "TS", price: 9.99 },
});
console.log(courses);
