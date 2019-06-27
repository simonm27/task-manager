//CRUD - create, read. update, delete

const {MongoClient, ObjectID} = require('mongodb')

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID("5d0cc8ef68e7dfb3840ea4bd")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    db.collection('users').find({age: 44}).toArray((error, users) => {
        console.log(users)
    })

    // db.collection('users').find({age: 44}).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({_id: new ObjectID("5d0cca13eab3e9b748f54b51")}, (error, task) => {
        if (error) {
            return console.log('unable to fetch')
        }
            console.log(task)
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    }) 

})