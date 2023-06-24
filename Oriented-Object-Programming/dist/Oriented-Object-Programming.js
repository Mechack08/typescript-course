"use strict";
const image = document.querySelector(".img");
function unBlurImage() {
    this.classList.add("un-blur");
}
image === null || image === void 0 ? void 0 : image.addEventListener("mouseenter", unBlurImage);
image === null || image === void 0 ? void 0 : image.addEventListener("mouseleave", function () {
    this.classList.remove("un-blur");
});
class Product {
    static getDiscount() {
        if (Product.holidaySales)
            return "The biggest discount of the year!";
        return "25% off";
    }
}
Product.holidaySales = true;
console.log(Product.holidaySales);
console.log(Product.getDiscount());
