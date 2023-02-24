// retrieve a prop that is deeply nested within objects
// i.e. { prop: { prop: { prop: 3 }}} => 3
function deepRetrieval(obj) {
    if(typeof(obj.prop)=="boolean" || typeof(obj.prop)=="number" || typeof(obj.prop)=="string")
    {
        return (obj.prop);
    }
    if(typeof(obj.prop)=="object")
    {
        return (deepRetrieval(obj.prop));
    }
}

module.exports = deepRetrieval;