require('../src/db/mongoose')
const User = require('../src/models/user')


//5d2f33984c1b674e8071cf6f

User.findByIdAndUpdate('5d2f33984c1b674e8071cf6f', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})