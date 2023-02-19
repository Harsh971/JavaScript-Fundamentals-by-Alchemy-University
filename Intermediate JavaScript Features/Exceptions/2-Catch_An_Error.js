function catchError(fn) {
    try{
        fn();
    }
    catch(e)
    {
        return e;
    }
    return false;
}

module.exports = catchError;