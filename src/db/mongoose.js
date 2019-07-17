const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 6,
//         validate(value) {
//             if (value.includes('password')) {
//                 throw new Error (`Password can't contain the word 'password'`)
//             }
//             }
//         }
//     }
// )

// const me = new User({
//     name: ' Lauren  ',
//     email: 'LaureN@MINifie.Me',
//     password: 'seventeen'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Tasks = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    description: '  Be happy ',
})

// const task  = new Tasks({
//     description: 'Mow the Lawn',
//     completed: false
// })

task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})