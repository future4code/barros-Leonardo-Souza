let taskList = [`Wash the dishes`]
const task = process.argv[2]

function newTask(arr, task) {
    arr.push(task)
    return arr
}


console.log(newTask(taskList, task));