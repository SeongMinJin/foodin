const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/', (req, res) => {
	fs.readFile('public/html/index.html', 'utf-8', (err, data) => {
		if (err) throw err;
		res.set('Content-Type', 'text/html');
		res.send(data);
	});
});

app.listen(3000, () => console.log('Foodin server is listening on port 3000'));
