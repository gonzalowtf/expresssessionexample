var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	session = require('express-session'),
    bodyP = require('body-parser'),
    coockieP = require('cookie-parser'),
    assert = require('assert'),
    morgan = require('morgan'),
    mongoose = require('mongoose');
    port = 3940;

var User= require('./models/user');


var url = 'mongodb://localhost:27017/datafuzzy';	
var url2 = "mongodb://hutter:cancer29@ds133438.mlab.com:33438/datafuzzy"; 



app.use(morgan('combined'));
app.use(bodyP());
app.use(coockieP());
app.use('/js', express.static(__dirname + '/js'));
app.use(session({
			secret: "asdasdasdnasdnan78687678saasdasdasda67867sd",
			
}));

/*app.post('/sessions',function(req,res){
    req.session.user_id = req.body.id;
    console.log(req.session.user_id);
});
*/

app.get('/',function(req,res){
    /*if(!req.session.userName && !req.session.visitCount){
        req.session.userName = "gonzalo";
        req.session.visitCount =1;
        res.status(201).send(req.session);
    }
    else{
        req.session.visitCount +=1;
        res.status(200).send(req.session);
    }
    */
    console.log(" session ?"+ req.session.user_id);
    res.sendfile(__dirname + '/index.html');  

});
app.get('/login',function(req,res){
    /*if(!req.session.userName && !req.session.visitCount){
        req.session.userName = "gonzalo";
        req.session.visitCount =1;
        res.status(201).send(req.session);
    }
    else{
        req.session.visitCount +=1;
        res.status(200).send(req.session);
    }
    */
    console.log(" session ?"+ req.session.user_id);
    res.sendfile(__dirname + '/login.html');  

});


app.get('/sessions', function(req,res){
    if(req.session.user_id){
        res.json({
            username: req.session.user_id
        });
    }
    else{
        res.status(200).send(req.session + "no se ha iniciado session");
        console.log("no se ha iniciado session");
    }
});

app.post('/sessions', function(req,res){
    if(req.body.destroy == "NO"){
User.findOne({username: req.body.username,password:req.body.password},function(err,results){
		req.session.user_id = results._id;
		console.log(req.session.user_id + "    user id en req.session");
        res.status(200).send(req.session);

	});
    }
    else{
        req.session.destroy();
    }
});

mongoose.connect(url2,function(err){
	assert.equal(null, err);
  console.log("Connected successfully to server with mongoose");
});



server.listen(port,function(err){
	if(err){
		console.log("could not start server");
	}
	else{
		console.log("server running at localhost:3940 or online port");
	}
});