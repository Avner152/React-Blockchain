import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import blockRoutes from './routes/blocks.js';


//mongo pass: qG6hKLBumnBCO5B7


const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }))

const CONNECTION_URL = "mongodb+srv://dolevp:qG6hKLBumnBCO5B7@blockchain.orxgb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('server started successfully')))
    .catch(err => console.log(err))

    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);


app.use('/blocks', blockRoutes);
app.use(express.urlencoded({ extended: false}))