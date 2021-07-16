// curl --data "username=JANET&lat=42.354951&lng=-71.0509" https://immense-woodland-80683.herokuapp.com/vehicles
const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const validator = require('validator')
const PORT = process.env.PORT || 5000;
const app = express()
const { Client } = require('pg');
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
});
client.connect();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
	extended:true
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/cool', (req, res) => res.send(cool()))

app.post('/rides', (req, res) => {

	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "X-Requested-With")

	var vehicles =  [
		{"_id":"5cdf411856e9c200042989d7","username":"JANET","lat":42.354951,"lng":-71.0509,"created_at":"2020-05-17T23:17:44.427Z"},
		{"_id":"5cf583aafbbfe80004456918","username":"mXfkjrFw","lat":42.3453,"lng":-71.0464,"created_at":"2020-06-03T20:31:38.378Z"},
		{"_id":"5cf583aafbbfe80004456919","username":"nZXB8ZHz","lat":42.3662,"lng":-71.0621,"created_at":"2020-06-03T20:31:38.611Z"},
		{"_id":"5cf583aafbbfe8000445691a","username":"Tkwu74WC","lat":42.3603,"lng":-71.0547,"created_at":"2020-06-03T20:31:38.786Z"},
		{"_id":"5cf583aafbbfe8000445691b","username":"5KWpnAJN","lat":42.3472,"lng":-71.0802,"created_at":"2020-06-03T20:31:38.932Z"},
		{"_id":"5cf583abfbbfe8000445691c","username":"uf5ZrXYw","lat":42.3663,"lng":-71.0544,"created_at":"2020-06-03T20:31:39.077Z"},
		{"_id":"5cf583acfbbfe8000445691d","username":"VMerzMH8","lat":42.3542,"lng":-71.0704,"created_at":"2020-06-03T20:31:40.400Z"}
	]

	var errorMessage = [
		{"error":"Whoops, something is wrong with your data!"}
	]

	//check for the existence of necessary fields and if lat and lng are correct format
	if (req.body.username != undefined && req.body.lat != undefined && req.body.lng != undefined && validator.isFloat(req.body.lat) && validator.isFloat(req.body.lng) ) {
			client.query('INSERT INTO request_table (username, lat, lng) VALUES ($1, $2, $3)', [req.body.username, req.body.lat, req.body.lng], (error,result)=>{
				client.query('SELECT * FROM vehicle_table', (error,result)=>{
					res.send(result.rows)
				} )
				//res.send(vehicles)
			})
	} else {
		res.send(errorMessage)
	}
})

app.post('/vehicles', (req, res) =>{
  	res.header("Access-Control-Allow-Origin", "*")
  	res.header("Access-Control-Allow-Headers", "X-Requested-With")

	if (req.body.username != undefined && req.body.lat != undefined && req.body.lng != undefined && validator.isFloat(req.body.lat) && validator.isFloat(req.body.lng) ) {
			client.query('INSERT INTO vehicle_table (username, lat, lng) VALUES ($1, $2, $3)', [req.body.username, req.body.lat, req.body.lng], (error,result)=>{
				res.send("Availability updated")
			})
	} else {
		res.send("error processing your request")
	}
})

app.get('/passenger.json', (req, res) =>{
	var inputUsername = req.query.username
	if (inputUsername == undefined || inputUsername == null) {
		res.send("[]")
	} else {
		client.query('SELECT * FROM request_table WHERE username = ($1)', [inputUsername], (error,result) =>{
			res.send(result.rows)
		})
	}
})

app.get('/vehicle.json', (req, res) =>{
	var inputUsername = req.query.username
	if (inputUsername == undefined || inputUsername == null) {
		res.send("[]")
	} else {
		client.query('SELECT * FROM vehicle_table WHERE username = ($1)', [inputUsername], (error,result) =>{
			res.send(result.rows)
		})
	}
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));