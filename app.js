// -------ДЗ 11.1--------------

//  let userNamber= prompt ('Введіть своє число і отримайте його в квадраті');

//  alert (userNamber*userNamber);

// -----------ДЗ 11.2-----------------

//  let userName = prompt("Введіть своє ім*я");
//  let userSum = prompt("Введіть сумму");
//  let userMonths = prompt("Зазначте строк дій депозиту");

// let n = userSum;
//   n *= 0.2;
//  n /= 12;
//  n *= userMonths;

// alert (`Шановний ${userName},Ви внесли ${userSum} грн.під 20% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${n} грн.`);

// ---------------------ДЗ 11.3------------------------------

// let userAnumber = prompt("Введіть число а");
// let userBnumber = prompt("Введіть число b");

// let sum = +userAnumber + +userBnumber;
// let difference = userAnumber - userBnumber;
// let multiplication = userAnumber * userBnumber;
// let division = userAnumber / userBnumber;

// let sumText = "сумма чисел=";
// let differenceText = ", різниця чисел=";
// let multiplicationText = ", множення чисел=";
// let divisionText = ", ділення чисел=";

// alert(  sumText + sum +differenceText +difference +multiplicationText +multiplication +divisionText +division);

// ----------------------ДЗ 12.1---------------------------------

let userAge = prompt("Введіть свій вік");
if (userAge > 45) {
  alert("Ви не підходите");
} else if (userAge < 18) {
  alert("Ви не підходите");
} else {
  alert("Ви  підходите");
}

// --------------------ДЗ 12.2-----------------------------------

let userAnumber = prompt("Введіть число а");
let userBnumber = prompt("Введіть число b");
if (userAnumber <= 3) {
  alert("Не вірно");
} else if (userAnumber >= 12) {
  alert("Не вірно");
} else if (userBnumber >= 13) {
  alert("Не вірно");
} else if (userBnumber < 5) {
  alert("Не вірно");
} else {
  alert("Вірно");
}

// -------------------ДЗ 12.3.-----------------------------------

let userName = prompt("Введіть своє ім*я");
let userSum = prompt("Введіть сумму");
let userMonths = prompt("Зазначте строк дій депозиту");

let nBefore6 = userSum;
nBefore6 *= 0.15;
nBefore6 /= 12;
nBefore6 *= userMonths;

let nBetween6And9 = userSum;
nBetween6And9 *= 0.16;
nBetween6And9 /= 12;
nBetween6And9 *= userMonths;

let nAfter9 = userSum;
nAfter9 *= 0.17;
nAfter9 /= 12;
nAfter9 *= userMonths;

if (userMonths < 6) {
  alert(
    `Шановний ${userName}, Ви внесли ${userSum} грн.під 15% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nBefore6} грн.`
  );
} else if (userMonths > 9) {
  alert(
    `Шановний ${userName}, Ви внесли ${userSum} грн.під 17% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nAfter9} грн.`
  );
} else {
  alert(
    `Шановний ${userName}, Ви внесли ${userSum} грн.під 16% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nBetween6And9} грн.`
  );
}
