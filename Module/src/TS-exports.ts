function getProductName({ productName }: { productName: string }): string {
  return productName;
}

const course = { name: "JS", price: 12.99 };

export { getProductName, course };

/* ---------------------------------------------- */

export const onlineCourse = {
  name: "JS",
  rating: 4.6,
};

/* ---------------------------------------------- */
// const offlineCourse = {
//   name: "TS",
//   price: 19.99,
// };
// export default offlineCourse;

// export default "Yes we can";

/* ---------------------------------------------- */
// -Conditianlly Loading Modules
export const released = false;
export const courseName = "Javascript for begginer";
