const tasks = []
function addTask (task) {
  tasks.push(task)
}
function deleteTask (index) {
  tasks.splice(index, 1)
}

addTask('Test')
deleteTask(0)