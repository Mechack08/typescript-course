// DESCLARATIVE FUNCTION
/* function holidaySales(
  product: string,
  sale: number,
  tax: number,
  discount: number
): number {
  let price: number = 0;

  if (product === "hisense tv") price = 250;
  if (product === "elitebook") price = 700;
  if (product === "hard disk") price = 45;

  let totalSalesForIndividualProduct: number = price * sale;

  return (
    totalSalesForIndividualProduct -
    tax * totalSalesForIndividualProduct -
    discount * totalSalesForIndividualProduct
  );
}

console.log("$" + holidaySales("hisense tv", 72, 0.16, 0.2));
console.log("$" + holidaySales("elitebook", 30, 0.16, 0.2));
console.log("$" + holidaySales("hard disk", 76, 0.16, 0.2)); */

/* FUNCTION EXPRESSION */
/* const holidaySales1 = function (
  product: string,
  sale: number,
  tax: number,
  discount: number
): number {
  let price: number = 0;

  if (product === "hisense tv") price = 250;
  if (product === "elitebook") price = 700;
  if (product === "hard disk") price = 45;

  let totalSalesForIndividualProduct: number = price * sale;

  return (
    totalSalesForIndividualProduct -
    tax * totalSalesForIndividualProduct -
    discount * totalSalesForIndividualProduct
  );
};

let hisense: number = holidaySales1("hisense tv", 10, 0.16, 0.2);
let elitebook: number = holidaySales1("elitebook", 18, 0.16, 0.2);
let harddisk: number = holidaySales1("hard disk", 25, 0.16, 0.2);

console.log(`The Electronic depart has sold $${hisense} for Hisense TV`);
console.log(
  `The Electronic depart has sold $${elitebook} for EliteBooks Computer`
);
console.log(`The Electronic depart has sold $${harddisk} for Hard Disks`); */

/* ARROW FUNCTION */
const holidaySales1 = (
  product: string,
  sale: number,
  tax: number,
  discount: number
): number => {
  let price: number = 0;
  //   let dept: string;

  if (product === "hisense tv") price = 250;
  if (product === "elitebook") price = 700;
  if (product === "hard disk") price = 45;

  let totalSalesForIndividualProduct: number = price * sale;

  return (
    totalSalesForIndividualProduct -
    tax * totalSalesForIndividualProduct -
    discount * totalSalesForIndividualProduct
  );
};

let hisense: number = holidaySales1("hisense tv", 10, 0.16, 0.2);
let elitebook: number = holidaySales1("elitebook", 18, 0.16, 0.2);
let harddisk: number = holidaySales1("hard disk", 25, 0.16, 0.2);

console.log(`The Electronic depart has sold $${hisense} for Hisense TV`);
console.log(
  `The Electronic depart has sold $${elitebook} for EliteBooks Computer`
);
console.log(`The Electronic depart has sold $${harddisk} for Hard Disks`);
