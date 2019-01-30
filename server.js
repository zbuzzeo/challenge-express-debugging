// error 1: neither packages were installed
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

// variables were re-routed. also changed to ./routes instead of ./router.
const home = require('./routes/home/get/index'); // rename this to router?
const about = require('./routes/about/get/index'); // rename this to router?
const contact = require('./routes/contact/get/index'); // rename this to router?

// express.statc('public'); is not a route
app.use(express.static('./public'));
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.send('smoke test');
});

// app.use() needed a second parameter. app.use() says this: at THIS file path, i want THIS file to handle it.
app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
