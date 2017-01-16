var mongoose = require( 'mongoose' );

var uriSchema = new mongoose.Schema({
  uri: String,
});

var Uri = mongoose.model('Uri', uriSchema);

module.exports.Uri = Uri;
