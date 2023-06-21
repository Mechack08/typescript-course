interface Employee {
  readonly id: number;
  name: string;
  hobbies: string[];
  employeeHobbies(): string[];
}

function newHiring(id: number, name: string, hobbies: string[]): Employee {
  return {
    id,
    name,
    hobbies,
    employeeHobbies() {
      return this.hobbies;
    },
  };
}

const getNewHiring: Employee = newHiring(1, "Kobius", [
  "Basketball",
  "PlayStation",
]);

console.log(getNewHiring);
console.log(getNewHiring.employeeHobbies());
