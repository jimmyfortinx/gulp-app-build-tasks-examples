var path = require('path');

exports.angular = {
    module: "powerfulApp"
}

exports.paths = {
    karmaConf: path.join(__dirname, 'karma.conf.js'),
    protractorConf: path.join(__dirname, 'protractor.conf.js')
}