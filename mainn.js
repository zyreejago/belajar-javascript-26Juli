document.title = `Belajar 27 Juli`;
const body = document.body;
body.append(`BELAJAR 27 JULI`);

const h1 = document.createElement("h1");
h1.innerHTML = "<marquee>TEST H1 TEST</marquee>"; //bisa innerTEXT dan bisa juga textContent
//marquee untuk menggerakan teks dari kanan ke kiri
body.append(h1);

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(`#btn2`);

btn1.style.borderRadius = `5px`;
btn1.style.padding = `5px`;
btn1.style.marginRight = `5px`;
btn1.style.marginTop = `10px`;
btn1.style.fontSize = `15px`;
btn1.style.background = `aqua`;

btn2.style.borderRadius = `10px`;
btn2.style.padding = `10px`;
btn2.style.fontSize = `15px`;

const defaultText = `Download CV`;
btn2.textContent = defaultText;

function ClickButton() {
  btn1.style.background = `tomato`;
  btn1.textContent = `Success`;
  const newText = document.createElement("h1");
  newText.innerHTML = `KAMU KENA PRANKKK`;
  body.append(newText);
}

function ChangeColor() {
  btn2.style.background = `orange`;
  btn2.textContent = `Downloaded Success`;
  let muncul = document.createElement(`p`);
  muncul.textContent = `TASK SATU DARI DEA `;
  body.append(muncul);
}

function KembaliSemula() {
  btn2.innerHTML = defaultText;
  btn2.style.background = `white`;
  const tagP = document.getElementsByTagName("p");
  for (let i = 0; i < tagP.length; i++) {
    tagP[i].style.color = "green";
  }
}

function AddName(firstname, lastname) {
  console.log(firstname, lastname);
}

AddName(`Zyrree`, `Rezzy`);

// const contoh1 = new function('console.log("kamu zyree")');

function contoh(x, y) {
  return x + y; //console.log(x + y);
}
console.log(contoh(5, 6)); //contoh (5,6)

const contoh3 = (x, y) => {
  console.log(x + y);
};
contoh3(3, 7);

// function task1() {
//   alert((22 / 7) * prompt(`masukan jari jari lingkaran`));
//   alert(p * l);
//   A;
// }

const nama = prompt(`Masukan Nama Anda`);
const perhari = prompt(`Gaji Perhari`);
const kerja = prompt(`Masukan jumlah hari kerja anda`);
totalgaji(perhari, kerja);
function totalgaji(perhari, kerja) {
  const total = perhari * kerja;
  alert(
    `${nama} gaji perhari ${perhari} dengan jumlah hari kerja ${kerja} maka total gaji ${total}`
  );
}


const namaDosen = ["Roni", "Rian", "Dhea"];
for (let i = 0; i < namaDosen.length; i++) {
  console.log(namaDosen[i]);
}