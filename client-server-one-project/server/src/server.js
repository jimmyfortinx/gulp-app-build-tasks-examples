var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.use('/api', require('./api'));

var server = app.listen(9000, function() {
    var host = server.address().address;
    var port = server.address().port;

    if (host === '::') {
        host = 'localhost';
    }

    console.log('Server app listening at http://%s:%s', host, port);
});
