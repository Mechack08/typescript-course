const image: HTMLImageElement | null = document.querySelector(".img");

// function unBlurImage(e: Event) {
//   console.log(e);
// }
function unBlurImage(this: HTMLImageElement) {
  this.classList.add("un-blur");
}

image?.addEventListener("mouseenter", unBlurImage);
image?.addEventListener("mouseleave", function (this: HTMLImageElement) {
  this.classList.remove("un-blur");
});

/* ============= Class ============== */
/* ---------- public and private ------- */
// class Robot {
//   public readonly id: number;
//   public name: string;
//   public model: string;
//   public fabrication?: string;
//   private sentient: boolean;

//   constructor(id: number, name: string, model: string, sentient: boolean) {
//     this.id = id;
//     this.name = name;
//     this.model = model;
//     this.sentient = sentient;
//   }

//   walk() {
//     console.log(`The ${this.name} model: ${this.model} can walk`);
//   }

//   talk() {
//     return this.sentient;
//   }
// }
// const robot = new Robot(5563, "Chat PORTER", "AX67ZB", true);
// console.log(robot);

/* --------- getter and setter ---------- */
// class Robot {
//   constructor(
//     public readonly id: number,
//     public name: string,
//     public model: string,
//     private _sentient: boolean
//   ) {}

//   walk(): void {
//     console.log(`The ${this.name} model: ${this.model} can walk`);
//   }

//   get sentient(): boolean {
//     return this._sentient;
//   }
//   set sentient(sentient: boolean) {
//     this._sentient = sentient;
//   }
// }
// const robot = new Robot(5563, "Chat PORTER", "AX67ZB", true);
// console.log(robot);
// robot.sentient = false;
// console.log(robot.sentient);

/* ------ Inheritence & Abstract class -------- */
// abstract class Robot {
//   constructor(
//     public name: string,
//     public model: string,
//     public durability: string,
//     public weight: number
//   ) {}

//   get robotInfo(): string {
//     return `${this.name} robot with model ${this.model} has a ${this.durability} durability and a weight of ${this.weight}`;
//   }
// }

// class Voxar extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }
// class Pickboad extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// const vox = new Voxar(22734, "Vox1622", "AXB00027", "low", 22.5);
// const pick = new Pickboad(44661, "Pick7789", "BZ2107G", "high", 89);
// console.log(vox);
// console.log(pick);

/* ------- Interfaces & implements -------- */
// interface RobotInterface {
//   name: string;
//   durability: string;
//   weight: number;
//   robotInfo(): string;
// }

// abstract class Robot implements RobotInterface {
//   constructor(
//     public name: string,
//     protected model: string,
//     public durability: string,
//     public weight: number
//   ) {}

//   robotInfo(): string {
//     return `${this.name} robot with model ${this.model} has a ${this.durability} durability and a weight of ${this.weight}`;
//   }
// }

// interface VoxarInterface {
//   id: number;
//   name: string;
//   durability: string;
//   weight: number;
// }
// class Voxar extends Robot implements VoxarInterface {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// const vox = new Voxar(22734, "Vox1622", "AXB00027", "low", 22.5);
// console.log(vox);

/* -------- Static method ----------- */
class Product {
  static holidaySales: boolean = true;

  static getDiscount(): string {
    if (Product.holidaySales) return "The biggest discount of the year!";
    return "25% off";
  }
}

console.log(Product.holidaySales);
console.log(Product.getDiscount());
