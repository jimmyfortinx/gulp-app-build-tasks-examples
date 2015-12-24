var express = require('express');
var router = express.Router();

router.get('/awesome-list', function (req, res) {
    res.json([
        { firstname: "John", lastname: "Smith" },
        { firstname: "Peter", lastname: "Pan" },
        { firstname: "Gino", lastname: "Chouinard" }
    ]);
});

module.exports = router;