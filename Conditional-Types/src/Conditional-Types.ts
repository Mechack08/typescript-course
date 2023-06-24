type Name = string;
type Price = number;

type Product<T> = T extends "ProductName" ? Name : Price;

let productName: Product<"ProductName">;
let productPrice: Product<"ProductPrice">;
