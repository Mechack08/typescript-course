"use strict";
function newHiring(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        employeeHobbies() {
            return this.hobbies;
        },
    };
}
const getNewHiring = newHiring(1, "Kobius", [
    "Basketball",
    "PlayStation",
]);
console.log(getNewHiring);
console.log(getNewHiring.employeeHobbies());
