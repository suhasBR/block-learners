const express = require('express');
const app = express();
require('dotenv').config();
const user = require("./routes/user");
const cors = require('cors')

const connectDB = require('./db/connect');
const BloczWallet = require('./routes/bloczwallet');
const port = process.env.PORT || 5000;


// to parse JSON 
app.use(express.json());

app.use(cors());

app.get('/hello',(req,res) => {
    res.send('Welcome to Blocz');
});

app.use('/api/v1/user',user);
app.use('/api/v1/bloczwallet',BloczWallet)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        server = app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
        
    } catch (error) {
        console.log(error);
    }
}

start();

