function shortStrings(array) {

    return (array.filter((el) => 
    el.length <= 3));
    }

module.exports = shortStrings;