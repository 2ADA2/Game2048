require('dotenv').config();
const express = require('express');
const sequalize = require('./db');
const models = require('./models/models')
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.port || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        await sequalize.authenticate();
        await sequalize.sync();
        app.listen(PORT, () => {
            console.log('express working at ' + PORT);
        })        
    } catch (e) {
     console.log(e); 
    }
 }

start()