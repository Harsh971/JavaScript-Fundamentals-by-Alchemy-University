// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        let{food,type} = currentValue;
        return {...accumulator,[type]:[...(accumulator[type] || []),food]};

    }, {} );
}

module.exports = group;