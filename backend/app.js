const express = require("express");
const app = express()
const PORT = 4000;
const Product = require("./models/schema");
const Routes = require('./routes/route');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

require("./db/conn");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use(Routes);
// app.use('/product', Routes);


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
});