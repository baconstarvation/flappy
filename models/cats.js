var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var catSchema = mongoose.Schema({
  age: Number,
  color: String,
  name: String,
});

var Cats = mongoose.model('Cats', catSchema);
module.exports = Cats;