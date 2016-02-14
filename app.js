var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.get('/', function(request, response) {
  response.render('home');
});

app.get('/projects', function(request, response) {
  response.render('projects');
});

app.get('/projects/:id', function(request, response) {
  if ( request.params.id == 'chat') {
    response.render('chat');
  } else {
    response.sendStatus(404);
  }
});

app.get('/resume', function(request, response) {
  response.render('resume');
});

app.get('/about', function(request, response) {
  response.redirect('/about');
});

app.listen(app.get('port'), function() {
  console.log("Site is running on port " + app.get('port'));
});
