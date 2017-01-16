var express = require('express');
var router = express.Router();
var uriCtrl = require( '../controllers/UriServiceController' );

router.get( '/', uriCtrl.index );
router.get( '/new/*', uriCtrl.store );
router.get( '/:id', uriCtrl.find );

module.exports = router;
