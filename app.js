const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();




app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug');
app.set('views', 'views');

app.use('/admin', adminRoute.routes);
app.use(shopRoute);


app.use((req, res, next) => {
  res.status(404).render('404.hbs');
});

//////////////////
app.listen(port, () => {
  console.log("Server is  Running..");
});