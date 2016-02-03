var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 3000));
//app.use(express.static('public'));
app.use(express.static('public/bower_components'));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log("Site is running on port " + app.get('port'));
});
