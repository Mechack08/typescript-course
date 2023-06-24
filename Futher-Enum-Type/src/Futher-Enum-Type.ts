enum Courses {
  JS,
  TS,
}

function setCoursePrice(course: Courses) {
  switch (course) {
    case Courses.JS:
      return "$22.99";
    case Courses.TS:
      return "$33.99";
    default:
      getWarning(course);
  }
}
function getWarning(course: never): never {
  throw new Error(`The Course ${course} is not priced.`);
}

console.log(setCoursePrice(Courses.TS));
console.log(setCoursePrice(Courses.JS));
// console.log(setCoursePrice(Courses.Python));
