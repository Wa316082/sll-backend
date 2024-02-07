const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

dotEnv.config();

app.use(bodyParser.json())
const db = async () => {
    try {
        await mongoose.connect(process.env.db_url)
        console.log('db connect')
    } catch (error) {
        console.log('db not connect' + error);
    }
}
const port = process.env.LocalPort || 3000;

app.get('/', (req, res) => res.send('Hello Express is ON'))
app.listen(port, () => {
    db();
    console.log("Connected to server..." + port);
    console.log('http://localhost:' + port)
});