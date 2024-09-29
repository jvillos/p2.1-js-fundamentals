const randomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
}

const getLotteryNumbers = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(randomNumber(0,99999).toString().padStart(5, '0'));
    }
}

console.log(getLotteryNumbers());