const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  const user = {
    name: 'Rodrigo Anchieta',
    surname: 'Anchieta',
  }

  res.render('home', { user: user });
})

app.listen(3000);
