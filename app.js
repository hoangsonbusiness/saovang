require('./common/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const app = express();

app.use(cookieParser())

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware LOCAL
app.use(cors({
    origin: [
        "http://localhost:4200",
        "http://localhost:8080"
    ],
    credentials: true,
}));

// CORS Middleware PRODUCTION
// app.use(cors());

// CORS Middleware
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'uploads')))

// Index Route
app.get('/dmm', (req, res) => {
    console.log('token = ' + req.cookies.jwt)
    res.send('Test app');
});

const loginRoute = require('./routes/login.route');
app.use('/login', loginRoute);

const commonRoute = require('./routes/common.route');
app.use('/course', commonRoute);
app.use('/subject', commonRoute);
app.use('/traineeCourse', commonRoute);

const fileRoute = require('./routes/file.route');
app.use('/file', fileRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});