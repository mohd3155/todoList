import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import './App.css'

function App() {
 

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <AddTask/>
        <TasksList />
    </div>
  )
}

export default App
