'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const models = require('./database/models')
const Op = models.sequelize.Op;

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

//Body parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
 	res.render('index', {
 		title: 'Title Test'
	});
});

app.get('/users', (req, res) => {

	models.User.findAll({
		where: {
			age: {
				[Op.gt]: 26
			}
		}
	}).then(function(users){
		// users.forEach(user => console.log(user));
		res.send(users);
	});
	// models.User.findAll().then(users => res.send(users));
	// res.send(Promise.all([users]));
	// get_users().then(data => res.send(data));
});

app.listen(PORT, HOST, function(){
  console.log(`Running on http://${HOST}:${PORT}`);  
});

//example
async function get_users(){
	var ua = models.User.findAll({
		where: {
			age: {
				[Op.gt]: 26
			}
		}
	});
	var ub  = models.User.findAll({
		where: {
			age: {
				[Op.lt]: 27
			}
		}
	});
	return Promise.all([ua, ub]);
};
