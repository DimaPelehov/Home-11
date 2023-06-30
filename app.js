// -------ДЗ 11.1--------------

// let userNamber = +prompt("Введіть своє число і отримайте його в квадраті");
// let x = 2;

// alert(userNamber ** x);

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

// let userAnumber = +prompt("Введіть число а");
// let userBnumber = +prompt("Введіть число b");

// let sum = userAnumber + userBnumber;
// let difference = userAnumber - userBnumber;
// let multiplication = userAnumber * userBnumber;
// let division = userAnumber / userBnumber;

// alert(
//   `сумма чисел=${sum}, різниця чисел=${difference}, множення чисел=${multiplication}, ділення чисел=${division}`
// );

// ----------------------ДЗ 12.1---------------------------------

// let userAge = prompt("Введіть свій вік");
// if (userAge > 45) {
//   alert("Ви не підходите");
// } else if (userAge < 18) {
//   alert("Ви не підходите");
// } else {
//   alert("Ви  підходите");
// }

//  АНАЛОГІЧНИЙ ВАРІАНТ
// userAge > 45 || userAge < 18 ? alert("Ви не підходите") : alert("Ви підходите");

// --------------------ДЗ 12.2-----------------------------------

// let userAnumber = +prompt("Введіть число а");
// let userBnumber = +prompt("Введіть число b");
// if (userAnumber <= 3) {
//   alert("Не вірно");
// } else if (userAnumber >= 12) {
//   alert("Не вірно");
// } else if (userBnumber >= 13) {
//   alert("Не вірно");
// } else if (userBnumber < 5) {
//   alert("Не вірно");
// } else {
//   alert("Вірно");
// }

// АНАЛОГІЧНИЙ ВАРІАНТ
// userAnumber <= 3 || userAnumber >= 12 || userBnumber >= 13 || userBnumber < 5
//   ? alert("Не вірно")
//   : alert(" Bірно");

// -------------------ДЗ 12.3.-----------------------------------

// let userName = prompt("Введіть своє ім*я");
// let userSum = prompt("Введіть сумму");
// let userMonths = prompt("Зазначте строк дій депозиту");

// let nBefore6 = userSum;
// nBefore6 *= 0.15;
// nBefore6 /= 12;
// nBefore6 *= userMonths;

// let nBetween6And9 = userSum;
// nBetween6And9 *= 0.16;
// nBetween6And9 /= 12;
// nBetween6And9 *= userMonths;

// let nAfter9 = userSum;
// nAfter9 *= 0.17;
// nAfter9 /= 12;
// nAfter9 *= userMonths;

// if (userMonths < 6) {
//   alert(
//     `Шановний ${userName}, Ви внесли ${userSum} грн.під 15% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nBefore6} грн.`
//   );
// } else if (userMonths > 9) {
//   alert(
//     `Шановний ${userName}, Ви внесли ${userSum} грн.під 17% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nAfter9} грн.`
//   );
// } else {
//   alert(
//     `Шановний ${userName}, Ви внесли ${userSum} грн.під 16% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nBetween6And9} грн.`
//   );
// }

// АНАЛОГІЧНИЙ ВАРІАНТ
// userMonths < 6
//   ? alert(
//       `Шановний ${userName}, Ви внесли ${userSum} грн.під 15% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nBefore6} грн.`
//     )
//   : userMonths > 9
//   ? alert(
//       `Шановний ${userName}, Ви внесли ${userSum} грн.під 17% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nAfter9} грн.`
//     )
//   : alert(
//       `Шановний ${userName}, Ви внесли ${userSum} грн.під 16% річних, на термін ${userMonths} місяців. За цей період часу Ви заробите ${nBetween6And9} грн.`
//     );

// -----------------------------------------ЗАДАЧА ПО ПІДТВЕРДЖЕННЮ ПАРОЛЯ ТА ЛОГІНА------------------------------------------------------------------------------------------------------------------

// Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть “Я вас не знаю”.
// Пароль перевіряється наступним чином:
// Якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”,
// Інший рядок – покажіть “Неправильний пароль”,
// Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”.

// let userLogin = prompt("Введіть логін");

// if (userLogin === "Адмін") {
//   let userPassword = prompt("Введіть пароль");
//   if (userPassword == undefined || userPassword == "") {
//     alert("Скасовано");
//   } else if (userPassword == "Господар") {
//     alert("Ласкаво просимо!");
//   } else {
//     alert("Неправильний пароль");
//   }
// } else if (userLogin == null || userLogin == "") {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

// -------------------------------------------ЗАДАЧА ПО ВИЗНАЧЕННЮ ПОРИ РОКУ-------------------------

// let userMonths = prompt("Введіть назву місяця").toLowerCase();

// userMonths === "червень" || userMonths === "липень" || userMonths === "серпень"
//   ? alert(`${userMonths} це літо`)
//   : userMonths === "вересень" ||
//     userMonths === "жовтень" ||
//     userMonths === "листопад"
//   ? alert(`${userMonths} це оcінь`)
//   : userMonths === "грудень" ||
//     userMonths === "січень" ||
//     userMonths === "лютий"
//   ? alert(`${userMonths} це зима`)
//   : userMonths === "березень" ||
//     userMonths === "квітень" ||
//     userMonths === "травень"
//   ? alert(`${userMonths} це весна`)
//   : alert("такого місяця немає");

// ------------------ДЗ 14.2---------------------------------------------------------

// let a = +prompt("введіть а");
// let b = +prompt("введіть b");

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// alert(max(a, b));

// // ------------------ДЗ 14.3----------------------------------------------------------

// let userAge = +prompt("введіть рік народження");
// let yearNow = +"2023";

// function age(yearNow, userAge) {
//   return yearNow - userAge;
// }

// alert(age(yearNow, userAge));

// // ------------------ДЗ 14.4----------------------------------------------------------

// let clientYear = +prompt("введіть свій рік народження");
// let userName = prompt("введіть своє ім'я");
// let yearToday = +"2023";
// let clientAge = yearToday - clientYear;
// let yearsPensia = 60 - clientAge;

// function yearsUntilRetirement(clientAge, userName) {
//   if (clientAge >= 60) {
//     console.log(`${userName} вже на пенсії`);
//   } else {
//     console.log(`${userName} вийде на пенсію через ${yearsPensia} років`);
//   }
// }

// yearsUntilRetirement(clientAge, userName);

// -------------------ПРАВИЛЬНИЙ ВАРІАНТ ВИРІШЕННЯ ПОПЕРЕДНІХ ДВУЧ ЗАДАЧ-------------------------------------

// function calcAge(year) {
//   return 2023 - year;
// }

// console.log(calcAge(1993)); -----> НА ЦЬОМУ ЗАКІНЧУЄТЬСЯ ДЗ 14.3

// function yearsUntilRetirement(year, userName) {
//   let age = calcAge(year);
//   let retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(`${userName} вийде на пенсію через ${retirement} років`);
//   } else {
//     console.log(`${userName} вже на пенсії`);
//   }
// }

// yearsUntilRetirement(1993, "Jack");

// АБО

// yearsUntilRetirement(+prompt("Ваш рік народження"), prompt("Ваше ім'я"));

// ------------------------------------ДЗ 15.1--------------------------------------------
function weekFn(n) {
  switch (n) {
    case 1:
      alert("Понеділок");
      break;

    case 2:
      alert("Вівторок");
      break;

    case 3:
      alert("Середа");
      break;

    case 4:
      alert("Четвер");
      break;

    case 5:
      alert("П'ятниця");
      break;

    case 6:
      alert("Субота");
      break;

    case 7:
      alert("Неділя");
      break;

    default:
      alert(null);
  }
}

console.log(weekFn(+prompt("введіть номер дня тижня")));

// -----------------------------------------ДЗ 15.2--------------------------------

let a = +prompt("введіть а");
let b = +prompt("введіть b");

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

let c = confirm("Сказати яке більше число?");
function foo(c) {
  if (c === true) {
    alert(max(a, b));
  } else {
    alert(min(a, b));
  }
}

alert(foo(c));
