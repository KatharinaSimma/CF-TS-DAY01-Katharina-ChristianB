"use strict";

// Basix ex 1
let number = [1,2,3,4,5,6,7,8,9,10];

for (let zahl of number){
    // outside loop takes each element of the array and ...
    for (let zahl1 of number){
        // ... inside loop multiplies each element with the value of the outside array
        document.write(`${zahl}X${zahl1}=${zahl1*zahl}<br>`)
    } document.write(`<hr>`)
}