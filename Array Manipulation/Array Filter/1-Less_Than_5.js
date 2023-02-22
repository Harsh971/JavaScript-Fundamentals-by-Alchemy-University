function lessThanFive(array) {
    const ones = array.filter((function (el) {
        return (el < 5);
    }));
    return ones;
}

module.exports = lessThanFive;