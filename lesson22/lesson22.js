/*
промис - результат завершения ассинхронной операции, хранящий в себе состояние, результат операции и колбеки

resolve - успешное выполнение
reject - выполнение с ошибкой
*/

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve('done'), 1000);
//     setTimeout(() => reject(new Error('whoops')), 1000);
// });

let promise2 = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

promise2.then(alert); // 1