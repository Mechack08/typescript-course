// import { getProductName as product, course } from "./Create-Typescript-Project";

// console.log(product({ productName: "TS Boot-Camp" }));
// console.log(course);

// ---------------------------------------------------
// Re-export

// import { onlineCourse } from "./Re-export";

// console.log(onlineCourse);

// ---------------------------------------------------
// -Importing & Exporting Code from Barrel Files

// import { productsList, product } from "./utils";
// console.log(product);
// console.log(productsList);

// ---------------------------------------------------
// -Export default

// import course from "./TS-exports";
// console.log(course);

// import text from "./TS-exports";
// console.log(text);

// ---------------------------------------------------
// -COnditionally Loading Modules

// import { released, courseName } from "./TS-exports";

// if (released) {
//   import("./TS-exports").then(() => console.log(courseName));
// }
// console.log(courseName);

// ---------------------------------------------------
// -Creating Ambient Modules

// -1
// import { addition } from "./ambient";
// addition

// -2
// import { addition } from "ambient";
// addition;

// ---------------------------------------------------
// -Augmenting Ambient Module

import { addition } from "ambient";
addition(15, 25);

declare module "ambient" {
  export function addition(): string;
}
addition();
