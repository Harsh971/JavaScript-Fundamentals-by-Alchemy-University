function sortUp(array) {
    return (array.sort(
        function(a,b)
        {
            return (a-b);
        }
        ));
}

module.exports = sortUp;