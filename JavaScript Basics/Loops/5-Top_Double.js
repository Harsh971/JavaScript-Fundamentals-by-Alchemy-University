function topDouble(value, top) {
   let k = value;
   for(let i=value; i<top; i*=2)
   {
       if(i*2 < top)
       {
           k *= 2;
       }
   }
   return k;
}
topDouble(1,5);
module.exports = topDouble;