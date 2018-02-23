var server = require('./myApp/index');
var port = process.env.PORT || 8081;

server.listen(port, function () {
  console.log('Server running on port %d', port);
});