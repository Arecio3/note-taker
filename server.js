const express = require('express');
const path = require('path');


// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));

// app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));

app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`));