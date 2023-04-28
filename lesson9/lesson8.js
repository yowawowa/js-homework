let gymInventory = {
    supplements: {
        proteins: 10,
        aminoAcids: 15,
        fatBurners: 5,
    },
    dumbbells: 20,
    balls: 20,
}

gymInventory.supplements['vitamins'] = 30; // adding vitamins to obj
console.log('number of balls: ' + gymInventory.balls);
delete gymInventory.supplements["fatBurners"]; // removing unused property


// console.log('proteins' in gymInventory); // указано в решении, но очевидно не работает

console.log('')


function findItem(item, place) {  // function to find item in any place
    for (key in place) {
        if (item == key) {  // if match is present function return string
            return console.log(item + ' are here');
        } else {
            findItem(item, place[key])  // recursive function to go on deeper levels
        }
    }
}

findItem('proteins', gymInventory);

