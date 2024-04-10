// Write a loop that logs numbers from 1 to 10 to the console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Create a while loop that logs "Hello, World!" 5 times.

let count: number = 0
while(count< 5){
    console.log("Hello World");
    count++;
}

// Use a for...of loop to iterate through an array of your favorite movies and log each one.

let favMovies: string[] = ['Avengers', 'Inception', 'The Conjuring', '12th fail', '3 idiots']
for(let val of favMovies){
    console.log(val);
}