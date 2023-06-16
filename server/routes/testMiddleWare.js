const express = require('express');
const app = express();


app.get('/', function (req, res, next) {
	console.log('Middleware is working properly');
});

