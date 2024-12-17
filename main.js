// let nama = "Zyree";
// let umur = 20;
// let tinggiBadan = 172.5;
// let beratBadan = 62;
// let pacar = 1;
// let prestasi = null;

// let saldoAwal = 80000;
// let SaldoTambahan = 30000;
// let hutang = 10000;
// const saldoAkhir = saldoAwal + SaldoTambahan - hutang;

// //KONDISI MENGGUNAKAN IF ELSE
// // if (prestasi == null) {
// //   prestasi = "saya tidak punya prestasi";
// // } else {
// //   prestasi = "saya memiliki prestasi";
// // }

// // KONDISI MENGGUNAKAN SWICTH
// // switch (prestasi) {
// //   case 1:
// //     prestasi = "saya hanya memiliki 1 prestasi";
// //     break;
// //   case 7:
// //     prestasi = "saya memiliki lebih dari 1 prestasi";
// //     break;
// //   default:
// //     prestasi = "saya memiliki banyak prestasi";
// //     break;
// // }

// alert(
//   `saya memiliki saldo Rp.${saldoAwal} dan saldo saya akan ditambah sebesar Rp.${SaldoTambahan} jadi saldo akhir saya Rp.${saldoAkhir}`
// );
// alert(
//   `Haii perkenalkan nama saya ${nama} umur saya saat ini ${umur} tinggi badan saya ${tinggiBadan}cm berat badan saya ${beratBadan}kg dan saya memiliki pacar sebanyak ${pacar} alhamdulillah saya memiliki prestasi sebanyak ${prestasi}`
// );

// let namaDosen = ["Roni", "Rian", "Dhea"];
// namaDosen.push("Angga", "Tori");

// namaDosen.pop();

// alert(namaDosen);
// const namaDosen = ["Roni", "Rian", "Dhea"];
// for (let i = 0; i < namaDosen.length; i++) {
//   console.log(namaDosen[i]);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log("rezzy");
// }

// let i = 10;
// do {
//   i++;
//   console.log("rezzy");
// } while (i < 10);

// var saldoAkhir = prompt("Saldo Akhir Saya ");
// alert(`saldo Akhir saya adalah Rp.${saldoAkhir}`);

// let saldoAwal = prompt("Inputkan Saldo Awal anda");
// let saldoTambahan = prompt("Inputkan Saldo tambahan anda");
// const saldoAkhir = saldoAwal + saldoTambahan;
// alert(`Saldo Akhir saya adalah Rp.${saldoAkhir}`);

// let hari = new Date().getDay();
// switch (hari) {
//   case 1:
//     hari = "senin";
//     break;
//   case 2:
//     hari = "selasa";
//     break;
//   case 3:
//     hari = "rabu";
//     break;
//   case 4:
//     hari = "kamis";
//     break;
//   case 5:
//     hari = "jumat";
//     break;
//   case 6:
//     hari = "sabtu";
//     break;
//   case 7:
//     hari = "minggu";
//     break;
// }

// alert(`hari ini adalah hari ${hari}`);

// cara mengubah array kw index pertama dengan tidak merubah array original
// const ArraySaya = [`🍕`, `🍔`, `🍟`, `🌭`, `🥚`]; //ORIGINAL
// const newArraySaya = ArraySaya.slice(); //KW

// newArraySaya[0] = `😎`;

// console.log(ArraySaya);
// console.log(newArraySaya);

// const ArrayKamu = [];

// ArrayKamu[`Pizza`] = `🍕`;
// ArrayKamu[`burger`] = `🍔`;

// console.log(ArrayKamu);

// const Array = [`🍕`, `🍔`, `🍟`, `🌭`, `🥚`];

// const kentang = Array.includes(`🍟`);

// if (kentang) {
//   const posisiKentang = Array.indexOf(`🍟`);
//   const indexBefore = posisiKentang - 1;
//   const indexAfter = posisiKentang + 1;
//   const before = Array[indexBefore];
//   const after = Array[indexAfter];
//   console.log(`makanan sebelum pizza: ${before}`);
//   console.log(`makanan sesudah pizza: ${after}`);
//   const buahAwal = Array[0];
//   console.log(`makanan pertama: ${buahAwal}`);
//   const buahAkhir = Array[Array.length - 1];
//   console.log(`makanan terakhir: ${buahAkhir}`);
// } else {
//   console.log(`saya tidak tahu posisinya`);
// }

// const makanan = [`🍕`, `🍔`, `🍟`];
// const minuman = [`☕`, `🍶`, `🍷`];

// const Gabungan = minuman.concat(makanan);

// for (list of Gabungan) console.log(Gabungan);

// Gabungan.map((value, index) => {
//   console.log(value, index);
// });
