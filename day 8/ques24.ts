let str1: string = "Hasan";
let str2: string = "Raza";
let num1: number = 6;
let num2: number = 12;
let array: number[] = [1, 2, 3, 4, 5];

console.log("Tests for equality and inequality with strings:");
console.log(str1 === "Hasan");
console.log(str2 !== "Raza");

console.log("Tests using the lower case function:");
console.log(str1.toLowerCase() === "hasan");
console.log(str2.toLowerCase() === str2);

console.log("Numerical Tests:");
console.log(num1 === (num2 - 6));
console.log(num2 !== 12);
console.log(num2 > num1);
console.log(num1 < 6);
console.log(num1 >= 6);
console.log(num2 <= 10);

console.log("Tests using 'AND' and 'OR' operators");
console.log(str1 == "Hasan" && str2 == "Raza");
console.log(num1 % 2 == 0 && num2 % 2 != 0);
console.log(str1 == "Hasan" || str2 != "Raza");
console.log(num1 === 12 || num2 === 6);

console.log("Test whether an item is in an array");
console.log(array[2] == 3);
console.log(array.indexOf(4) == 4);

console.log("Test whether an item is not in an array");
console.log(array[4] != 4);
console.log(array.indexOf(1) != 0);






















