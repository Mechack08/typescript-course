/* -------- EXTRACT ----------- */

type MixedType =
  | 666
  | "Hey"
  | ["Hey", "Hi"]
  | { name: string; price: number }
  | [2, 1, 5]
  | 15
  | { name: "JS"; price: number }
  | { name: "TS"; price: 99.99 };

type Strings = Extract<MixedType, string>;
type StrArray = Extract<MixedType, string[]>;
type NumberArray = Extract<MixedType, number[]>;
type Objects = Extract<MixedType, { name: string }>;
type Objects1 = Extract<MixedType, { name: "JS" }>;

/* -------- EXCLUDE ----------- */
type MixedTypes =
  | 666
  | "Hey"
  | ["Hey", "Hi"]
  | { name: string; price: number }
  | [2, 1, 5]
  | 15
  | { name: "JS"; price: number }
  | { name: "TS"; price: 99.99 };

type NoStrings = Exclude<MixedTypes, string>;
type NoNumbers = Exclude<MixedTypes, number>;
