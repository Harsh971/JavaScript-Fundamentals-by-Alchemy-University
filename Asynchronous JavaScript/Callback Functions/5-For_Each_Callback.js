function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    for(let i=0; i<arr.length; i++) {
        callback(arr[i], i)
    }
}

module.exports = forEach;