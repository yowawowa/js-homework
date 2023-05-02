// JSON используется для удобства передачим и хранения данных между фронт и бэкэндом; между разными языками

// синтаксис

// создание обоъекта JS
let user = {
    age: 21,
    name: 'john',
    isAdmin: false,
}

let string = JSON.stringify(user); // конвертирование объекта в строку JSON

// вывод полученной строки

console.log(string);
console.log(typeof string); // убеждаемся что это строка


obj = JSON.parse(string); // конвертирование строки JSON обратно в объекст JS

// вывод полученного объекта

console.log(obj);
console.log(typeof obj); // убеждаемся что это объект

// так же возможно создание JSON по типу обычной строки. результат будет такой же

let str = '{"age":20, "name":"pepe"}'
obj2 = JSON.parse(str);
console.log(obj2);

/* JSON поддерживает: строки, числа, массивы, булев тип, null, объекты
не может быть функцией, датой, undefined
*/

