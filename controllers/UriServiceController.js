var validUrl = require( 'valid-url' );
var Uri = require( '../database/models/Uri' ).Uri;

exports.index = function( req, res ) {
  res.status(200).render('index', { title: "Url Shortener Service"});
}

exports.find = function( req, res ) {
  Uri.find({ "_id" : req.params.id })
    .exec( function(err, uri) {
      if (err) return res.status(500).json({ error: "Invalid Url" });

      res.redirect(uri[0].uri);
    });
}

exports.store = function( req, res ) {
  var trimmedUri = trimUri( req.originalUrl );
console.log(trimmedUri);
  if ( validUrl.isWebUri( trimmedUri  ) === undefined ) {
    return res.status(500).json( { error: "Invalid Url" } );
  }
console.log("Valid Uri");
  var newUri = new Uri({ uri: trimmedUri });
console.log("Attempting to save newUri");
  newUri.save( function (err, uri) {
    if (err) {
      return res.status(500)
                .json( { error: "Error saving to database" } );
    }
console.log("Object saved");
    res.status(200)
       .json( { original_url: trimmedUri, short_url: "https://leshorturl.herokuapp.com/" + uri.id} );
  });
}

var trimUri = function (uri) {
  return uri.slice(5);
}

exports.trimUri = trimUri;
