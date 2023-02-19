function shortestString(str1, str2) {
    if(str1.length >= str2.length)
    {
        return str2;
    }
    else
    {
        return str1;
    }
}

module.exports = shortestString;