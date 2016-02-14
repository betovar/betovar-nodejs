var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist/'));
app.use(express.static('node_modules/bootstrap/dist/'));
//app.use(express.static('node_modules/angular/'));

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
  response.render('about');
});

app.listen(app.get('port'), function() {
  console.log("Site is running on port " + app.get('port'));
});
