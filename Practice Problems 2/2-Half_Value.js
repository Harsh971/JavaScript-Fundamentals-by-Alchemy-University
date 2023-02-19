function halfValue(numbers) {
    let numbers2 = [];
    for(let i=0; i<numbers.length; i++)
    {
        numbers2[i] = Math.ceil(numbers[i]/2);
    }
    return numbers2;
}

module.exports = halfValue;