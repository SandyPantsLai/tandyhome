const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

// Set static folder
app.use(express.static(__dirname + '/public'));

// Routes
const users = require('./routes/users');
app.use('/users', users);

app.listen(app.get('port'), function() {
  console.log("Node JS app started. Listening on port " + app.get('port'));
});