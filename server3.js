var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var cors = require('cors');


var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));


//var jsonParser = bodyParser.json();
app.use(bodyParser.json())

app.post('/pd', function (req, res) {
    dbConn.then(function(db) {
	var dbo = db.db("test")
         
        dbo.collection('vmdetails').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/vd',  function(req, res) {
    dbConn.then(function(db) {
	var dbo = db.db("test");
        dbo.collection('vmdetails').find({}).toArray().then(function(collection) {
            res.status(200).json(collection);
        });
    });
});

app.delete('/dd/:_id', function (req, res) {
    dbConn.then(function(db) {
	var ID = req.params._id;
	var dbo = db.db("test") 
     dbo.collection('vmdetails').remove({_id: mongodb.ObjectID( req.params._id)}), function(er, docs) {
     if (er) return err;
     console.log(docs);
     res.send(docs);
     

    }});   
});

app.listen(process.env.PORT || 8083, process.env.IP || '192.168.106.141' );
