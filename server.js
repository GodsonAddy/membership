const express = require("express");
const path = require("path")
const app = express();
const cors = require("cors");
const errorHandler = require("errorhandler");
const mongoose = require("mongoose");
require("dotenv").config();
const session = require('express-session');
var bodyparser = require('body-parser');


//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;


//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';


// Body parser middleware

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '10mb'}));
app.use(cors());
app.use(require('morgan')('dev'));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: 'passport-tutorial',
 cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false 
}));

//Error handlers & middlewares

if(!isProduction) {
  app.use(errorHandler());
}


// static folder

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {console.log("success")})
.catch(res => {console.error("error")})
mongoose.set('debug', true);

// Models and routes
require('./models/Users');
require('./models/Members');
require('./config/passport');
app.use(require('./routes'));


if(!isProduction) {
  app.use(( req, res, err) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}
  
app.use((req, res, err) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});




  
const port = 8000;

app.listen(port)