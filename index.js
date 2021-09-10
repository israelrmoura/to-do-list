// Programa simples para To-Do list com Node e Express.
// Falta implementar: JSON.
var express = require('./node_modules/express');
var app = express();

app.use(express.static('public'));

app.get('index.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

var server = app.listen(8080, console.log('Escutando na porta 8080'));
