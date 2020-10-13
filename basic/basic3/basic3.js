// Basic ex 3
var names = ["Christian", "Katharina", "Theo", "Serri", "Acilio", "Marina"];
// 1. Print only the index of the elements.(ForIn)
for (var index in names) {
    console.log(index);
}
;
// 2. Print only the values. (ForOf)
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var value = names_1[_i];
    console.log(value);
}
// 3. Print both index and values(ForIn)
for (var index in names) {
    console.log(index, names[index]);
    //console.log(names[index]) // print index of an array
}
