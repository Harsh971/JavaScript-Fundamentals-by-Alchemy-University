function sortStringsUp(array) {
   array.sort((a, b) => 
    b.localeCompare(a, "fr", 
    { 
        ignorePunctuation: true 
    })); 
}

module.exports = sortStringsUp;