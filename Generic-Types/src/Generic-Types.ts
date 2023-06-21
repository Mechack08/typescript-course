/* function getArrayItem<T>(item: Array<T>): T {
  return item[1];
}

let number = getArrayItem<number>([1, 2, 3, 4, 5]);
let string = getArrayItem<string>(["Hey", "Hello"]);

console.log(number);
console.log(string); */

/* Generic OBJECT */
type Student<T> = {
  firstName: T;
  lastName: T;
};

const student1: Student<string> = {
  firstName: "kobe",
  lastName: "makasi",
};

type Product<T1, T2> = {
  name: T1;
  price: T2;
};

const product1: Product<string, number> = {
  name: "Phone",
  price: 120,
};

const product2: Product<string, string> = {
  name: "Tablette",
  price: "Not available",
};

console.log(product1);
console.log(product2);
