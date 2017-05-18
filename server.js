//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    eps     = require('ejs'),
    morgan  = require('morgan');
    
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

//app.get('/', function (req, res) {
//    res.render('index.html', { pageCountMessage : null});
//});

app.get('*', function (req, res) {
    res.render('index.html');
});

app.listen(port, ip);
//console.log('Server running on http://%s:%s', ip, port);
console.log('Server running...');

module.exports = app ;
