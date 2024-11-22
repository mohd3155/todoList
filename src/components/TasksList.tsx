import { useContext} from "react"
import TasksContext from "../contexts/tasksContexts"

const headers = ["Task", "Description", "Status", "Change status", "Delete"]

const TasksList = () => {
    const{tasks , dispatch} = useContext(TasksContext)    
    
    const changeStatus = (value:string , taskId:number) =>  dispatch({type:"CHANGE", value:value, taskId: taskId})
    const handleDelete = (taskId : number) => dispatch({type:"DELETE" , taskId:taskId})
    const handleFilter = (value:string) => dispatch({type:"FILTER", value:value})
    
    console.log(tasks)

    return (
        <div className="w-3/4 h-3/5 flex flex-col justify-center items-center mt-5">
            <div className="w-full min-h-full flex justify-between space-x-5" >
            <div className="w-1/12">
                <select onChange={(e) => handleFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="w-11/12 min-h-full flex flex-col">
            <div className="w-full h-1/6 flex border border-black ">
            {headers.map((header,index) => 
                <div key={index+1} className="w-1/4 h-full flex justify-center items-center"><span className="w-full text-2xl font-bold text-center">{header}</span></div>
            )}
            </div>
            {tasks.map((task) => <div key={task.id} className="w-full h-1/6 flex ">
                <div className="w-1/4 h-full flex justify-center items-center"><span className="w-full  text-center">{task.task}</span></div>
                <div className="w-1/4 h-full flex justify-center items-center break-words"><p className="w-full text-center line-clamp-3">{task.description}</p></div>
                <div className="w-1/4 h-full flex justify-center items-center"><span className={`w-full text-center ${task.status === "Active" ? "text-red-600": "text-green-600"}`}>{task.status}</span></div>
                <div className="w-1/4 h-full flex justify-center items-center">
                    <select className="w-2/4"  onChange={(e) => changeStatus(e.target.value,task.id)}>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="w-1/4 h-full flex justify-center items-center"><button className="w-2/4" onClick={() => handleDelete(task.id)}>Delete</button></div>
            </div> )}
            </div>
            </div>
        </div>
                
    )
}

export default TasksList