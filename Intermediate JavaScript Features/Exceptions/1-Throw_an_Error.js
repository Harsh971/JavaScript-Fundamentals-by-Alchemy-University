function throwError() {
    const a = 3;
    if(a === 3) 
    {
         throw new Error("we dont want a to be 3");
    }
}

module.exports = throwError;