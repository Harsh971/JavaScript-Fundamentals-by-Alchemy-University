const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort((a,b) => 
    (MONTHS.indexOf(a.month) > MONTHS.indexOf(b.month)) ? 1 : -1)
}

module.exports = sortByMonth;