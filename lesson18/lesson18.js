/* стрелочные функции - сокращенная запись для созданимя функций.
данный вид функций является анонимным. у них особая привязка к this - он привязаны к контексту, а не к самой функции. то есть this будет наследоваться из окружения

используются для для написания коротких функций, когда требуется призяка к контексту
 */


let sum = (a, b) => a + b;

let sayHi = () => console.log('hi!');


sayHi();
console.log(sum(1, 2));

let user = {
    name: 'George',
    age: 22,
    intoduce() {
        console.log('I\'m ' + this.name + '. I\'m ' + this.age);
    }
}

user.intoduce();