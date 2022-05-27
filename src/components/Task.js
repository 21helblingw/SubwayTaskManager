
function Task({task,onToggle,count}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : '' }`} onClick={()=>{onToggle(task)}}>
        {<h3>{task.text}</h3>}
    </div>
  )
}

export default Task