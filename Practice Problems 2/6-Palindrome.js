function isPalindrome(string) {
    let str="";
    for(let i=string.length-1; i>=0; i--)    
    {
        str += string[i];
    }
    if(str === string)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

module.exports = isPalindrome;