function sortStudents(students) {
    students.sort((a,b) =>
    (b.graduated > a.graduated) ? 1 : (a.graduated === b.graduated) ? ((b.grade > a.grade) ? 1 : -1) :-1)
}

module.exports = sortStudents;