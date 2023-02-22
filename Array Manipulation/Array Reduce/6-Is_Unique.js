// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if((numbers.indexOf(currentValue) !== index) == true){
            accumulator = false
        }
        else
        {

        }
        return accumulator;
    }, true);
}

module.exports = allUnique;