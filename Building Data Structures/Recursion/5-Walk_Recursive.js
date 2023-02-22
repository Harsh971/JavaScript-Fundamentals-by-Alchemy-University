function walk(node) {
   if(node.next === undefined)
   {
       return node;
   }
   else
   {
       return walk(node.next);
   }
}

module.exports = walk;