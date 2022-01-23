require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', parameterLimit: 100000, extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))


app.use('/', express.static(__dirname + '/build'))
const port = process.env.PORT;

app.listen(port)
console.log(`Server running on port: ${port}`)
