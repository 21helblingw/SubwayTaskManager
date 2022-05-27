import Task from './Task'
function Tasks({tasks, onToggle, count}) {
  return (
    <>
        {tasks.map((task)=>(<Task key ={task.id} task = {task} onToggle ={onToggle} count ={count} />))}
    </>
  )
}

export default Tasks