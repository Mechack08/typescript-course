const course = {
  name: "TS",
  price: 19.99,
};

type Product = typeof course;
type ProductKeys = keyof Product;
type ProductKeysType = Product[ProductKeys];

const product: Product = {
  name: "JS",
  price: 29.99,
};

const getCourseInfo = function <T, K extends keyof T>(course: T, info: K) {
  return course[info];
};

const courseName = getCourseInfo(product, "name");
const coursePrice = getCourseInfo(product, "price");
console.log(courseName, coursePrice);
