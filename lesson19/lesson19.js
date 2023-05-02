// геттер и сеттер это свойтсва объекта, используемые для чтения и записи соответственно


let user = {
    _name: '',
    surname: 'Magpie',

    get fullName() {
        return this.name + ' ' + this.surname
    },

    set setName(name) {
        this.name = name;
    },

    get smartName() {
        return `${this._name}`;
    },
    set smartName(name) {
        if (name.length < 4) {
            console.log('too short');
        } else {
            this._name = name;
        }

    }

}

user.setName = 'Simon';
console.log(user.fullName);
