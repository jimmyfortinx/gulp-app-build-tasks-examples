var people = [
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'John', lastname: 'Smith2' },
    { firstname: 'Peter', lastname: 'Pan' },
    { firstname: 'Gino', lastname: 'Chouinard' }
];

exports.getAwesomeList = function(req, res) {
    res.json(people);
};
