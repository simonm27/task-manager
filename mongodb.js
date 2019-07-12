//CRUD - Create, read, update, delete

const mongodb = require('mongodb') //Mongodb driver
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Simon',
    //     age: 44
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Megan',
    //         age: 13
    //     },
    //     {
    //         name: 'Lauren',
    //         age: 10
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Mow the lawn',
            completed: true
        },
        {
            description: 'Feed the cat',
            completed: false
        },
        {
            description: 'Do the washing up',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }
        console.log(result.ops)
    })
})