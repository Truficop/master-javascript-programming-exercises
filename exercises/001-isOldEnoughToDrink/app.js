// function isOldEnoughToDrink(age) {
//     // your code here
//     if (age<21) {
//         console.log(false);
//     } else if(age>=21){
//         console.log(true);
//     }
// }

// isOldEnoughToDrink(19)

function isOldEnoughToDrink(age) {
    return age >= 21;
}

let output = isOldEnoughToDrink(22);
console.log(output);