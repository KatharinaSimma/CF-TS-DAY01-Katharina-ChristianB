
// Basic ex 3
let names = ["Christian", "Katharina", "Theo", "Serri", "Acilio", "Marina"];


// 1. Print only the index of the elements.(ForIn)
for (let index in names) {
   console.log(index);
};

// 2. Print only the values. (ForOf)
for (var value of names) {
    console.log(value);
}

// 3. Print both index and values(ForIn)
for (let index in names) {
    console.log(index, names[index]);
    //console.log(names[index]) // print index of an array
}


