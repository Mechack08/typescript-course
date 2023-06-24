"use strict";
const course = {
    name: "TS",
    price: 19.99,
};
const product = {
    name: "JS",
    price: 29.99,
};
const getCourseInfo = function (course, info) {
    return course[info];
};
const courseName = getCourseInfo(product, "name");
const coursePrice = getCourseInfo(product, "price");
console.log(courseName, coursePrice);
