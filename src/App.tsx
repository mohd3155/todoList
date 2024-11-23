import { useReducer } from 'react'
import TaskReducer, { initialState } from './reducers/tasksReducer'
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import './App.css'
import TasksContext from './contexts/tasksContexts'

function App() {
  const [tasks,dispatch] = useReducer(TaskReducer,initialState)



  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#1e2732]	'>
      <TasksContext.Provider value={{tasks : tasks.filteredTasks,dispatch}}>
        <AddTask/>
        <TasksList />
      </TasksContext.Provider>
    </div>
  )
}

export default App
