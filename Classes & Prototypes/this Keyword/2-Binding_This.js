function thisName() {
    return (this.name);
}
const newFunction = thisName.bind({name : "Bob"})

module.exports = newFunction;