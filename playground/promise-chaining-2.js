require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d2df1f9ca8fed0e305cccc3').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})