//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session')

require('dotenv').config()
const app = express();
const db = mongoose.connection;
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/express_app'
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))


//___________________
// Routes
//___________________
const roundsController = require('./controllers/rounds_controller.js')
app.use('/rounds', roundsController)
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)
const scorecardController = require('./controllers/scorecard_controller.js')
app.use('/scorecard', scorecardController)


//localhost:3000
app.get('/' , (req, res) => {
  res.redirect('/rounds');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
