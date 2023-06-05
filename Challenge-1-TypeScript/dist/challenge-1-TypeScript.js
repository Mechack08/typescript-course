"use strict";
var ProductNames;
(function (ProductNames) {
    ProductNames["Product1"] = "Laptop";
    ProductNames["Product2"] = "Mouse";
    ProductNames["Product3"] = "Keyboard";
})(ProductNames || (ProductNames = {}));
var ProductIds;
(function (ProductIds) {
    ProductIds[ProductIds["Laptop"] = 1] = "Laptop";
    ProductIds[ProductIds["Mouse"] = 2] = "Mouse";
    ProductIds[ProductIds["Keyboard"] = 3] = "Keyboard";
})(ProductIds || (ProductIds = {}));
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct[FavoriteProduct["Id"] = 1] = "Id";
    FavoriteProduct["Name"] = "Laptop";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(`My favorite product is ${FavoriteProduct.Name} which has an id of ${FavoriteProduct.Id}`);
let searchHistory = [
    "How to make money online",
    "benefits of eating galic",
    "html css tutorials",
    "calisthenics",
];
searchHistory.map((item) => {
    item.includes("html") || item.includes("css")
        ? console.log(`Would you like to read ${item}`)
        : console.log("");
});
