/* класс - описание совокупности свойств и методов, объединенных общей идеей
объект - конкретный экземпляр класса с конкретными значениями свойств, имеющий методы класса

класс - это функция с расширенным функционалом
*/

// синтаксис для работы с классами

class User {                                                    // ключевое слово и название
    constructor(name, surname) {                                // метод, который будет вызван автоматически при создании нового объекта данного класса
        this.name = name;
        this.surname = surname;
    }

    intro() {                                                   // дополнительный метод класса
        console.log(`I'm ${this.name} ${this.surname}!`)
    }
}

let user = new User('Michael', 'Keen');         // создание объекта класса User
user.intro();                                                // вызов метода у объекта