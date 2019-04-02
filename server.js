require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

// mongoose db connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/company-tree?retryWrites=true
`, { useNewUrlParser: true });

// cors middleware
app.use(cors());

// static middleware
app.use(express.static(path.join(__dirname, 'build')));

// routes
app.use('/api', require('./routes/employee'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// port
const port = 3001;
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});