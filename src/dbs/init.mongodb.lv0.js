'use strict';

const mongoose = require('mongoose');

const connectStr = `mongodb+srv://pengu:pengu@ecommerce.2qbo6md.mongodb.net/`
mongoose.connect(connectStr)
    .then(_ => console.log(`Connected MongoDb Success`))
    .catch(err => console.log(`Errpr Connect!`))

//dev
if (1 === 1) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.exports = mongoose