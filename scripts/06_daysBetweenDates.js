const calculateDaysBetweenDates= function(aString,bString){
    let a= Date.parse(aString);
    let b= Date.parse(bString);

    let diff=(a-b)/(1000*60*60*24)
    return Math.abs(Math.round(diff));
}

let date1 = "2024-07-01";
let date2 = "2024-07-13";
let daysBetween = calculateDaysBetweenDates(date1, date2);
console.log(`There are ${daysBetween} days between ${date1} and ${date2}.`);