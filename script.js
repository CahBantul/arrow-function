// function expression
// const tampilNama = function (name) {
//   console.log(`halo ${name}`);
// };
// tampilNama("Nozami");

// Arrow Function dan implisit return
// const tampilNama = (nama) => `halo ${nama}`;
// console.log(tampilNama("Fardan"));

let animal = ["chicken", "dog", "lion", "monkey"];

// function expression
// let jumlahHuruf = animal.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// Arrow Function
let jumlahHuruf = animal.map((nama) => ({ nama, JmlHuruf: nama.length }));
console.table(jumlahHuruf);
