"use strict";
const holidaySales1 = (product, sale, tax, discount) => {
    let price = 0;
    if (product === "hisense tv")
        price = 250;
    if (product === "elitebook")
        price = 700;
    if (product === "hard disk")
        price = 45;
    let totalSalesForIndividualProduct = price * sale;
    return (totalSalesForIndividualProduct -
        tax * totalSalesForIndividualProduct -
        discount * totalSalesForIndividualProduct);
};
let hisense = holidaySales1("hisense tv", 10, 0.16, 0.2);
let elitebook = holidaySales1("elitebook", 18, 0.16, 0.2);
let harddisk = holidaySales1("hard disk", 25, 0.16, 0.2);
console.log(`The Electronic depart has sold $${hisense} for Hisense TV`);
console.log(`The Electronic depart has sold $${elitebook} for EliteBooks Computer`);
console.log(`The Electronic depart has sold $${harddisk} for Hard Disks`);
