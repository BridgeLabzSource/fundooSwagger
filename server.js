var dirRoot = 'dist';
var port = Number(process.env.PORT || 4000);

var connect = require('connect');
connect().use(connect.static(dirRoot)).listen(port);

console.log('Static web server running on port: ' + port);
