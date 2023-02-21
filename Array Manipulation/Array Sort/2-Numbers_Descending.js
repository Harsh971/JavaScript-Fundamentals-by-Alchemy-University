function sortDown(array) {
    return (array.sort(
        function(a,b)
        {
            return (b-a);
        }
        ));
}

module.exports = sortDown;