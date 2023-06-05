/* Challenge 1 */

enum ProductNames {
  Product1 = "Laptop",
  Product2 = "Mouse",
  Product3 = "Keyboard",
}

enum ProductIds {
  Laptop = 1,
  Mouse,
  Keyboard,
}

enum FavoriteProduct {
  Id = ProductIds.Laptop,
  Name = ProductNames.Product1,
}

console.log(
  `My favorite product is ${FavoriteProduct.Name} which has an id of ${FavoriteProduct.Id}`
);

/* Challenge 2 */
let searchHistory: string[] = [
  "How to make money online",
  "benefits of eating galic",
  "html css tutorials",
  "calisthenics",
];

/* RESOLUTION */
// Long way
/* for (let item of searchHistory) {
  for (let subItem of item.split(" ")) {
    if (subItem === "html" || subItem === "css")
      console.log(`Would you like to read ${item}`);
  }
} */

// Short way
searchHistory.map((item) => {
  item.includes("html") || item.includes("css")
    ? console.log(`Would you like to read ${item}`)
    : console.log("");
});
