const randomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
}

let min = 0;
let max = 9999;
console.log(`List of numbers between ${min} and ${max}`)
for (let i = 1; i <= 10; i++) {
    console.log(randomNumber(min,max));
}

min = 10;
max = 40;
console.log(`List of numbers between ${min} and ${max}`)
for (let i = 1; i <= 10; i++) {
    console.log(randomNumber(min,max));
}


min = 18;
max = 90;
console.log(`List of numbers between ${min} and ${max}`)
for (let i = 1; i <= 10; i++) {
    console.log(randomNumber(min,max));
}


min = 1980;
max = 2020;
console.log(`List of numbers between ${min} and ${max}`)
for (let i = 1; i <= 10; i++) {
    console.log(randomNumber(min,max));
}