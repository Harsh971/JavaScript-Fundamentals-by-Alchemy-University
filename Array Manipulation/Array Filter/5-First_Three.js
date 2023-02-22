function firstThree(array) {
    return (array.filter((e,index) => 
    index < 3));
}

module.exports = firstThree;