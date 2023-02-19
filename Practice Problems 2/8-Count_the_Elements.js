function countElements(elements) {
    let obj = {};
    for(let i=0; i<elements.length; i++)
    {
        if(elements[i] in obj)
        {
            obj[elements[i]] += 1;
        }
        else
        {
            obj[elements[i]] = 1;
        }
    }
    return obj;
}

module.exports = countElements;