// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require( 'express' );
var bodyParser = require( 'body-parser' );

// define our app using express
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use( bodyParser.urlencoded( {extended: true} ) );
app.use( bodyParser.json() );

var port = process.env.PORT || 8088;  // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
                                            // (accessed at GET http://localhost:8080/api)

router.post( '/', function( req, res ){
    params = req.body;
    console.log( req.body );
    res.json( {status: "ok", something: params} );

} );

router.get( '/', function( req, res ){
    res.json( [
        {
            word: "hello"
        },
        {
            word: "world!"
        }
    ] );
} );

// more routes for our API will happen here


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use( '/api', router );
app.use( express.static( 'webapp' ) );

// START THE SERVER
// =============================================================================
app.listen( port );
console.log( 'Magic happens on port ' + port );
