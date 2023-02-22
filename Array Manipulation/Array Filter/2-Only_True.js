function onlyTrue(array) {
    const trues = array.filter((function (el) {
        if(el) {
            return (el);
        }        
    }));
    return trues;
}

module.exports = onlyTrue;