const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config.json')
const cors = require('cors')
const bodyparser = require('body-parser')



// mongodb connection
mongoose.connect(config.MONGO_URL)
.then(()=>console.log('connect success'))
.catch((err)=>console.log(err))


// configuration
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyparser.json())
app.use(cors());


// api routes
app.use('/api', require('./routes/users'))


// server connection
const port = config.MONGO_PORT  
app.listen(port,()=>{
    console.log(`server running on the ${port}`);
})







