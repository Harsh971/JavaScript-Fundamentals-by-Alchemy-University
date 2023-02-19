function sumTogether(arr1, arr2) {
    for(let i=0; i<arr1.length; i++)
    {
        arr1[i] += arr2[i];
    }
    return arr1;
}

module.exports = sumTogether;