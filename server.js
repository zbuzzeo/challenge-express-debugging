const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;
const home = require('./router/home'); // rename this to router
const about = require('./router/about'); // rename this to router
const contact = require('./router/contact'); // rename this to router

app.use(express.static('public'));
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.use(home);
app.use(about);
app.use(contact);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
