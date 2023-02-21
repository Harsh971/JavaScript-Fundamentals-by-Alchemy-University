function sortStringsUp(array) {
   array.sort((a, b) => 
    a.localeCompare(b, "fr", 
    { 
        ignorePunctuation: true 
    })); 
}

module.exports = sortStringsUp;