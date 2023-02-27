function map(arr, callback) {
    let store = [];
    for (let i = 0; i < arr.length; i++) {
        store.push(callback(arr[i], i))
    } 
    return store;
}

module.exports = map;