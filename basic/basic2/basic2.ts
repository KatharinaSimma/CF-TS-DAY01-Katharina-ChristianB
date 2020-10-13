// 1. Print your full name in the browser.
const obj:any = {
    name: 'Christian',
    lastName: 'Bodenwinkler',
    age: 29
};
// console.table(obj);

// const{name: n, lastName: l} = obj;
// document.write(`<h1>${n} ${l}</h1>`);



//2. Print your first name 10 times in the browser using a forEach loop.
function sayLater() {
    console.log(obj.name);
    setTimeout(function() {
        console.log(obj.lastName);
    }, 4000);
}

sayLater();




//3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
// setTimeout(() => {
//     let bw = `${obj.lastName}\n`;
//     console.log(bw.repeat(10));

//     let bw2 = `${obj.lastName} <br>`;
//     document.write(bw2.repeat(10));
// },5000);
