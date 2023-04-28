/*
Способы объявления символов в js:

при попощи функции конструктора -   let var = Symbol('symbolName');
                                    object[var] = value

либо при литеральным обращением -   let var = Symbol('symbolName');
                                    let object = {
                                        [var] = value,
                                    };

Для чего используют символы?
при помощи символов можно скрыто хранить свойства внутри объектов и обращатся к ним только напрямую в коде

Что такое hint, для чего используется примитивизация сложных объектов?
hint это подсказка, использующаяся при приведении сложных типов к простым типам

Какие способы преобразования объектов вы изучили?
.toPrimitive
.toString: function() {return ...}
.valueOf: function() {return ...}

*/

let user = {
    name: 'john',
    money: 1000,
    [Symbol.toPrimitive](hint) {

        return hint === "string" ? `{name: "${this.name}"}` : this.money;
    },
    valueOf: function () {
        return this.money;
    },
    toString: function () {
        return this.name;
    },
}

console.log(String(user));
console.log(Number(user));
console.log(user.toString());
console.log(user.valueOf());
