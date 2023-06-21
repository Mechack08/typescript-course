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
type Product = {
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
