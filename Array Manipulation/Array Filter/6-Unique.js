function unique(array) {
    return (array.filter((el,index) => 
    (array.indexOf(el) === index)));
}

module.exports = unique;