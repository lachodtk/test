var express = require('express');
const os = require('os');
var myWebApp = express();

//Format JSON output
myWebApp.set('json spaces', 2);

//Capitalize first letter of a word
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

myWebApp.get('/hello/:name', function (req, res) {
    var name = req.params.name.capitalize();
    var host = os.hostname();

    res.json({ message : 'Hello '+ name + ' from ' + host});
});

module.exports = myWebApp;