"use strict";
const getCourse = function (name, price, moreInfos) {
    return { name, price, moreInfos };
};
const course = getCourse("JS Advanced", 19.99, {
    released: true,
    beginnerFrendly: true,
    level: "Beginner-Advanced",
});
console.log(course);
const myName = "Kobius";
const courseLevel = "Beginner";
