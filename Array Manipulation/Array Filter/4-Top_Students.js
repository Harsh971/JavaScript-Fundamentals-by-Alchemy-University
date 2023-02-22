function topStudents(array) {
    return (array.filter((el) => 
    el.grade >= 90));
    }


module.exports = topStudents;