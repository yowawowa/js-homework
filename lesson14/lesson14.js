/*
map - итерируемый объект состоящий из пар ключ-значение. в отличие от массивов ключом может быть любой тип данных
так же просутствует ряд специфичных методов
*/
// создание и наполнение словаря

let user = new Map();
user.set('name', 'john');
user.set('age', 19);
user.set(12, 15);

// получение значений по ключу

console.log(user.get('age'));

// определяет наличие ключа в словаре и возвращает булевое значение

console.log(user.has('name'));

// удаление элементов по ключу

console.log(user);
user.delete(12);
console.log(user);

// возвращает размер словаря

console.log(user.size)

// очистка словаря

user.clear();
console.log(user);

/*
множество - это контейнер, содержащий неповторяющиеся элементы в случайном порядке
*/
let newSet = new Set();

// добавление элемента
newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(3); // если элемент уже есть в множестве, ничего не происходит
newSet.add(true);
newSet.add('bah');

// так же возможно указывать элементы при инициализации, в том числе итерируемыми объектами

// удаление элемента

newSet.delete(3);

// вывод размера множества

console.log(newSet.size);
console.log(newSet);

// определяет наличие значение в множестве и возвращает булевое значение
console.log(newSet.has(2));
console.log(newSet.has(22));

// полностью очищает множество
newSet.clear();
console.log(newSet);




