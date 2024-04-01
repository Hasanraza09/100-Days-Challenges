// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
var age = 17;
age = 18;
console.log("Updated age (let):", age); // Output: 18
var pi = 3.142;
try {
    pi = 3.214;
}
catch (error) {
    console.error("Error caught while reassigning const variable:", error); // Output: Error caught while reassigning const variable: TypeError: Assignment to constant variable.
}