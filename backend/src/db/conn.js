const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/vote"
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to database')
}).catch((err)=>{
    console.log('Could not connect to database')
})