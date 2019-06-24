//CRUD - create, read. update, delete

const {MongoClient, ObjectID} = require('mongodb')

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        name: 'Paul',
        age: 32
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })

    // db.collection('users').insertMany ([
    //     {
    //         name: 'Leila',
    //         age: 41
    //     },
    //     {
    //         name: 'Megan',
    //         age: 13
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Mow the lawn',
    //         completed: true
    //     },
    //     {
    //         description: 'Flea the cat',  
    //         completed: false
    //     },
    //     {
    //         description: 'Vacuum',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('There was an error inserting new tasks')
    //     }
    //     console.log(result.ops)
    // })


})