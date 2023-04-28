/*
объект Date используется для работы с датой и временем
*/

// создание
// mock data
let year = 1991;
let month = 1;
let day = 14;
let hours = 11;
let minutes = 30;
let seconds = 23;
let milliseconds = 0;

let date1 = new Date(); // создает объект с текущей датой и временем
let date2 = new Date(2546132651); // объект с количеством милисекунд прошедших от начала Unix-timestamp (1970-01-01 00:00)
let date3 = new Date(year, month, day, hours, minutes, seconds, milliseconds); // объект использущий аргументы для создания даты
let date4 = new Date('2015-06-11T07:15:22.417Z'); // объект в формате ISO 8601 Extended (YYYY-MM-DDTHH:mm:ss.sss)


console.log(date1.getTime());       // получение timestamp указанной даты.
console.log(date1.toTimeString());  // возвращает из даты часть со временем
console.log(date1.toDateString());  // возвращает из даты часть с датой

// получения отдельных частей даты

dateArr = [];
dateArr.push(date2.getFullYear());       // год
dateArr.push(date2.getMonth());          // месяц
dateArr.push(date2.getDay());            // день
dateArr.push(date2.getHours());          // час
dateArr.push(date2.getMinutes());        // минуты
dateArr.push(date2.getSeconds());        // секунды
dateArr.push(date2.getMilliseconds());   // милисекунды

console.log(dateArr);

// в противоположность методу get есть методы set который позволяет устанавливать объекту даты переданные в аргументах величины

let date5 = new Date();
date5.setFullYear(1988);       // год
date5.setMonth(7);          // месяц
date5.setDate(12);            // день
date5.setHours(0);          // час
date5.setMinutes(30);        // минуты1
date5.setSeconds(25);        // секунды
date5.setMilliseconds(0);   // милисекунды


console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
