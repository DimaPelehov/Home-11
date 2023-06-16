// let admin;
// let name;

// name = "Іван";
// admin = name;

// alert(admin);

// --------------------

// let ourPlanetName="Земля";
// let currentUserName="Іван"; -змінна імені поточного відвідувача сайту

// ---------------------

// let currentUserName= prompt ('Введіть своє ім*я');    тут з'являється форма,куди ми вводимо своє ім'я

// alert (`${currentUserName}`);                          тут воно нам виводиться

// -------ДЗ 11.1--------------

 let userNamber= prompt ('Введіть своє число і отримайте його в квадраті');

 alert (userNamber*userNamber);





// -----------ДЗ 11.2-----------------

 let userName = prompt("Введіть своє ім*я");
 let userSum = prompt("Введіть сумму");
 let userMonths = prompt("Зазначте строк дій депозиту");

 let firstText = "Шановний";
 let secondText = "Ви внесли";
 let thirdText = "грн., під 20% річних, на термін";
 let fourthText = "місяців. За цей період часу Ви заробите";
 let fifthText = "грн.";

let n = userSum;
  n *= 0.2;
 n /= 12;
 n *= userMonths;

alert (firstText+" "+userName+" "+secondText+" "+userSum+" "+thirdText+" "+userMonths+" "+fourthText+" "+n+" "+fifthText);





// ---------------------ДЗ 11.3------------------------------

let userAnumber = prompt("Введіть число а");
let userBnumber = prompt("Введіть число b");

let sum = +userAnumber + +userBnumber;
let difference = userAnumber - userBnumber;
let multiplication = userAnumber * userBnumber;
let division = userAnumber / userBnumber;

let sumText = "сумма чисел=";
let differenceText = ", різниця чисел=";
let multiplicationText = ", множення чисел=";
let divisionText = ", ділення чисел=";

alert(  sumText + sum +differenceText +difference +multiplicationText +multiplication +divisionText +division);
