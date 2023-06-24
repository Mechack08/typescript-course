"use strict";
function getCoursesInfo(course) {
    return course;
}
let courses = getCoursesInfo({
    JS: { name: "JS", price: 19.99 },
    TS: { name: "TS", price: 9.99 },
});
console.log(courses);
