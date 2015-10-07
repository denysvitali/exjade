var express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');

var app = express();

var cors = function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
}

// Configuration

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded(
{
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors);
app.set('view options',
{
    layout: false
});
app.use(express.static(__dirname + '/public'));

if (app.get('env') === "development")
{
    app.use(errorHandler(
    {
        dumpExceptions: true,
        showStack: true
    }));
}
else
{
    app.use(errorHandler());
}

// Routes

app.get('/', routes.index);

var server = app.listen(3000);
console.log("Express listening on port %d in %s mode", server.address().port, app.settings.env);