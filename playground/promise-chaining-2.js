require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d2df1f9ca8fed0e305cccc3').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5d2dcddaf8f6f8252cd4ee15').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
