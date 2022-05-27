import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
    const [count,setCount]= useState(32)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Reprep',
        reminder: false,
    },
    {
        id: 2,
        text: 'Thawing List',
        reminder: false,
    },
    {
        id: 3,
        text: 'Clean Microwave',
        reminder: false,
    },
    {
        id: 4,
        text: 'Clean Oven And Proofer',
        reminder: false,
    },
    {
        id: 5,
        text: 'Clean Cart',
        reminder: false,
    },
    {
        id: 6,
        text: 'Clean Bread Cabinets',
        reminder: false,
    },
      {
        id: 7,
        text: 'Sanitize Tables',
        reminder: false,
      },
    {
        id: 8,
        text: 'Trays From Front',
        reminder: false,
    },
    {
        id: 9,
        text: 'All Trash Out',
        reminder: false,
    },
    {
        id: 10,
        text: 'Sweep',
        reminder: false,
    },
    {
        id: 11,
        text: 'Mop',
        reminder: false,
    },
    {
        id: 12,
        text: 'Clean/Empty Hotwell',
        reminder: false,
    },
      {
        id: 13,
        text: 'Clean Bathroom',
        reminder: false,
    },
    {
        id: 14,
        text: 'Clean Bev. Counter',
        reminder: false,
    },
    {
        id: 15,
        text: 'Wipe Counters',
        reminder: false,
    },
    {
        id: 16,
        text: 'Windex Bain',
        reminder: false,
    },
    {
        id: 17,
        text: 'Wipe Above Bain',
        reminder: false,
    },
    {
        id: 18,
        text: 'Wipe Drawers And Put Cookies Away',
        reminder: false,
    },
    {
      id: 19,
      text: 'Wipe Out Bain Shelves',
      reminder: false,
    },
    {
        id: 20,
        text: 'Wash Silver Cambos',
        reminder: false,
    },
    {
        id: 21,
        text: 'Wash Knifes',
        reminder: false,
    },
    {
        id: 22,
        text: 'Clean All Handles',
        reminder: false,
    },
    {
        id: 23,
        text: 'Wipe Food Out Of Sink',
        reminder: false,
    },
    {
        id: 24,
        text: 'Pull Bread/Flatbread/Wraps',
        reminder: false,
    },
    {
        id: 25,
        text: 'Nozzeles in Sanitizer',
        reminder: false,
      },
      {
          id: 26,
          text: 'Fill Coffiee Maker',
          reminder: false,
      },
      {
          id: 27,
          text: 'Wash Knifes',
          reminder: false,
      },
      {
          id: 28,
          text: 'Empty Tea',
          reminder: false,
      },
      {
          id: 29,
          text: 'Lock Side Door/ Front Door',
          reminder: false,
      },
      {
          id: 30,
          text: 'Turn Lights/Open Sign Off',
          reminder: false,
      },
      {
        id: 31,
        text: 'Turn Off HotWell, Keurig',
        reminder: false,
      },
      {
        id: 32,
        text: 'Turn Off Toaster Oven',
        reminder: false,
      }
])

const finishedTask =(temp)=>{
  setTasks(tasks.map((task) => task.id == temp.id ? {...task,reminder: !task.reminder}: task))
    temp.reminder ? setCount(count+1) : setCount(count-1)
}

  return (
    <div className="container">
      <Header title="Subway Task Manager" count = {count} />
      <Tasks tasks ={tasks} onToggle ={finishedTask} count ={count}/>
    </div>
  );
}

export default App;
