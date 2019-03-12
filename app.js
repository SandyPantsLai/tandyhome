const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Welcome to Tandy Home');
})

app.listen(app.get('port'), function() {
  console.log("Node JS app started. Listening on port " + app.get('port'));
});