// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads');
});

// Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

// 404 Page
app.get('*', (req, res) => {
  res.send('404');
});

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');

  // LISTEN
  app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });
});
