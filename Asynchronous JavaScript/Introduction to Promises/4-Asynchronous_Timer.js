function timer() {
    const promise = new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve('resolve success');
        },1000)
    })
    return promise.then(function (message) {
        
    })
}

module.exports = timer;