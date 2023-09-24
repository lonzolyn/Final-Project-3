const mongoose = require('mongoose')

const parkSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        required: true 
    }, 
    hasGluten: { 
        type: Boolean
     }, image: { 
        type: String,  
        default: 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg' 
    },
    // baker: { 
     // type: mongoose.Types.ObjectId,
    //ref: 'Park' } 
})
module.exports = mongoose.model('Park', parkSchema)