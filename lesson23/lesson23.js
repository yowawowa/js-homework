/*
await может быть использован тольку внутри функции с ключевым словом async

await дожидается выполнения кода, перед которым он стоит, после чего следует обычное выполнение кода

async - модифицирует функцию таким образом, чтобы она всегда возвращала промис. любые выходные данные также оборачиваются в промис
await - останавливает движение интерпретатора до тех пор, пока не будет выполнен код, на который указывает await.
после получения результата выполняется линейное выполнение кода.
так же при возникновении ошибки во время выполнения await возвращает исключение (так же как throw)
*/



async function f1() {
    await console.log(1);
}

async function f2() {
    await console.log(2);
}

async function f3() {
    await console.log(3);
}


async function start() {
    await f1();
    await f2();
    await f3();
}

start();