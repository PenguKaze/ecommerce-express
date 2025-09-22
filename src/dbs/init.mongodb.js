const mongoose = require('mongoose');
const { countConnect } = require('../helpers/check.connect')

const connectStr = `mongodb+srv://pengu:pengu@ecommerce.2qbo6md.mongodb.net/`
const check = true
class Database {
    constructor() {
        this.connect()
    }
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectStr, {
            maxPoolSize: 50
        })
            .then(_ => console.log(`Connected MongoDb Success`))
            .catch(err => console.log(`Error Connect!`))
        if (check) {
            countConnect()
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb