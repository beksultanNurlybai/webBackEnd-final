const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const landmarkRoutes = require('./routes/landmarkRoutes');
const apiRoutes = require('./routes/apiRoutes');
const mainRoutes = require('./routes/mainRoutes');

require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.SERVER_ACCESS)
  .then(() => {
    console.info('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error: ', err)
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(session({
    secret: 'QsRdea!imf79o05',
    resave: false,
    saveUninitialized: true
}));

app.use('/auth', authRoutes);
app.use('/landmarks', landmarkRoutes);
app.use('/api', apiRoutes);
app.use('/', mainRoutes);


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});