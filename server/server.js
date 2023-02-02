const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
	fs.readFile('../public/html/index.html', 'utf-8', (err, data) => {
		if (err) throw err;
		res.set('Content-Type', 'text/html');
		res.send(data);
	})
});
app.get('/css/:fileName', (req, res) => {
	res.sendFile(`/Users/jinseongmin/Desktop/workshop/foodin/public/css/${req.params.fileName}`)
});
app.get('/javascript/:fileName', (req, res) => {
	res.sendFile(`/Users/jinseongmin/Desktop/workshop/foodin/public/javascript/${req.params.fileName}`)
});
app.get('/images/:fileName', (req, res) => {
	res.sendFile(`/Users/jinseongmin/Desktop/workshop/foodin/public/images/${req.params.fileName}`)
});
app.get('/data/:fileName', (req, res) => {
	res.sendFile(`/Users/jinseongmin/Desktop/workshop/foodin/public/data/${req.params.fileName}`)
});

app.listen(3000, () => console.log('Foodin server is listening on port 3000'));
