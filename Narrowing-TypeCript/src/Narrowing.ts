/* Conditional Narrowing */
/* type Item = { productName: string };

const myFunct = (item: Item | Item[]) => {
  if (Array.isArray(item)) {
    return item.length;
  }
  return item.productName;
}; */

/* Object Narrowing */
// type MagazineInfo = {
//   name: string;
//   author: string;
//   sales: number;
//   international: boolean;
//   price: number;
//   publicationYear: number;
// };

// const myBook: MagazineInfo = {
//   name: "Learn Javascript by solving challenges",
//   author: "8pro",
//   sales: 890,
//   international: true,
//   price: 29.99,
//   publicationYear: 2022,
// };
// console.log(myBook);

// type MagazineName = { name: string };

// const myBookName: MagazineName = myBook;
// console.log(myBookName);
// console.log(myBookName.name);

// ------------------------------------------
function getValue(arg: number | true) {
  return arg === true ? true : arg > 0;
}
console.log(getValue(0));
console.log(getValue(1));
console.log(getValue(true));
