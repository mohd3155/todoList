import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import {TasksProvider} from './contexts/tasksContexts'
import './App.css'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#1e2732]	'>
      <TasksProvider>
        <AddTask/>
        <TasksList />
      </TasksProvider>
    </div>
  )
}

export default App
