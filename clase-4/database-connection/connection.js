var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  console.log('open');
});

