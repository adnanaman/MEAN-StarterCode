const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Crypto', (err) => {
    if (!err) {
        console.log('M db connection success');
    }
    else{
        console.log('M db connection failure' + JSON.stringify(err, undefined, 2));
    }});
module.exports = mongoose;
