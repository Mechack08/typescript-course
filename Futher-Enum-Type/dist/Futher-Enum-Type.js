"use strict";
var Courses;
(function (Courses) {
    Courses[Courses["JS"] = 0] = "JS";
    Courses[Courses["TS"] = 1] = "TS";
})(Courses || (Courses = {}));
function setCoursePrice(course) {
    switch (course) {
        case Courses.JS:
            return "$22.99";
        case Courses.TS:
            return "$33.99";
        default:
            getWarning(course);
    }
}
function getWarning(course) {
    throw new Error(`The Course ${course} is not priced.`);
}
console.log(setCoursePrice(Courses.TS));
console.log(setCoursePrice(Courses.JS));
