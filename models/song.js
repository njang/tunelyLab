// require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create new schema, song Schema S3S1 TC
  //keys used to define properties and their schema types
var SongSchema = new Schema({
  name: String,
  trackNumber: Number
});

//compile Song schema into Song model S1S3 TC
//each document will be a 'Song' with properties declared in schema
var Song = mongoose.model('Song', SongSchema);

//export Song TC
module.exports = Song;
