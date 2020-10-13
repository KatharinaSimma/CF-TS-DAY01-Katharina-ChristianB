"use strict";
// Basix ex 1
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var zahl = number_1[_i];
    // outside loop takes each element of the array and ...
    for (var _a = 0, number_2 = number; _a < number_2.length; _a++) {
        var zahl1 = number_2[_a];
        // ... inside loop multiplies each element with the value of the outside array
        document.write(zahl + "X" + zahl1 + "=" + zahl1 * zahl + "<br>");
    }
    document.write("<hr>");
}
