// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((unique, item) => (unique.includes(item) ? unique : [...unique,item])
    , [] );
}

module.exports = removeDuplicates;