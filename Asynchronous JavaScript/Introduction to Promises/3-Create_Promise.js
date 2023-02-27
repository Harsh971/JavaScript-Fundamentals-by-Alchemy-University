function timer() {
    const promise = new Promise(function(resolve,reject) {
        resolve('resolve success');
    })
    return promise.then(function (message) {
        
    })
}

module.exports = timer;