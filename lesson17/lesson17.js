// рекурсия - это вызов функции внутри себя


function pow(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

console.log(pow(2, 3));

function powRec(number, power) {
    return (power === 1) ? number : number * powRec(number, power - 1);
}

console.log(powRec(2, 3));

// не понимаю как показать что всё написано с нуля, но в восьмом уроке уже есть пример рекурсивной функции 🤔

