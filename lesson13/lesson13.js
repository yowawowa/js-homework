// метод splice добавляет и/или удаляет элементы из массива.
// принимает индекс с которого происходит удаление и количество элементов.
// возвращает удаленные элементы. изменяет первоначальный массив
let arr = ['I\'m', 'studying', 'JS'];
let arrayTwo = [1, 2, 3, 4];

console.log(arr.splice(0, 2));
console.log(arr);

// slice - возвращает обозначенные элементьы как новый массив
arr = ['I\'m', 'studying', 'JS'];
let slicedArr = arr.slice(0, 2);
console.log(slicedArr);

// concat - конкатенирует два или более массива или примитивы
console.log(arr.concat(slicedArr));
console.log(arr.concat('CONCAT'));

// forEach - вызывает функцию на каждый элемент массива. не возвращает новый массив
let res = 0;
arrayTwo.forEach(sum);
console.log(res);

function sum(item) {
    res += item;
}

// либо может быть использованна для итерации.
arrayTwo.forEach((element, index, array) => {
    console.log(`Element ${element} with index ${index} from array ${array}`);
});


console.log(arr.indexOf('studying', 0));
console.log(arr.lastIndexOf('studying', 2))
console.log(arr.includes('studying'))

// filter фильтрация элементов в новый массив по условию
let resArray = arrayTwo.filter(el => {
    return el >= 3;
});
console.log(resArray);

// map - принимает callback функцию как аргумент. вызываент функцию на каждый элемент массива и возвращает новый массив.
let mappedArray = arr.map(el => {
    return el.length;
})

console.log(mappedArray);

// sort - сортирует массив в алфавитном порядке. для сортировки числовых значний необходимо так же передавать функцию, которая будет осуществлять сортировку

let unsortedArr = [2, 6, 23, 4, 12, 7];
console.log(unsortedArr);

unsortedArr.sort();
console.log(unsortedArr);

let sortedArr = unsortedArr.sort(compare);
console.log(sortedArr);

function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

// reverse - разворачивет массив

console.log(unsortedArr.reverse())
