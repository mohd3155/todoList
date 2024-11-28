import { useContext} from "react"
import TasksContext from "../contexts/tasksContexts"

const headers = ["Task", "Description", "Status", "Change status", ""]

const TasksList = () => {
    const{tasks, filter, dispatch} = useContext(TasksContext)  
    
    const changeStatus = (value:string , taskId:number) =>  dispatch({type:"CHANGE", value:value, taskId: taskId})
    const handleDelete = (taskId : number) => dispatch({type:"DELETE" , taskId:taskId})
    const handleFilter = (value:string) => dispatch({type:"FILTER", value:value})


    const getStatus = (status: string) => {
        return ["all", "Active", "Completed"].find((_status) => _status === status)
    } 
    

    return (
        <div className="2xl:w-3/4 sm:w-4/5 xs:w-11/12 2xl:h-3/5 sm:h-3/5 xs:h-3/4 sm:flex 2xl:flex-row xs:flex-col 2xl:justify-center 2xl:items-center xs:mt-5">
            <div className="2xl:w-full 2xl:h-full 2xl:flex 2xl:flex-row xs:flex-col 2xl:justify-between" >
            <div className="2xl:w-1/12 sm:w-2/4 xs:w-full 2xl:h-1/6 2xl:border-b-2 2xl:border-r-2 xs:border-r-0 2xl:border-white 2xl:pr-2 ">
                <label className="2xl:w-full xs:text-white xs:font-bold">Filter By :</label>
                <select data-testid="filter" onChange={(e) => handleFilter(e.target.value)} value={filter} className="2xl:w-full xs:w-2/4 xs:bg-[#1e2732] xs:text-white">
                    <option value="all">All</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="2xl:w-11/12 xs:w-full 2xl:min-h-full xs:flex xs:flex-col xs:mt-5 2xl:mt-0">
            <div className="2xl:w-full xs:w-full 2xl:h-1/6 xs:h-full xs:flex xs:flex-row">
            {headers.map((header,index) => 
                <div key={index+1} className="2xl:w-1/4 xs:w-1/5 2xl:h-full flex xs:justify-center xs:border-b-2  xs:border-white xs:items-center"><span className="w-full xs:w-full text-2xl font-bold xs:text-xs sm:text-base lg:text-2xl xs:truncate xs:text-center text-white">{header}</span></div>
            )}
            </div>
            {tasks.map((task) => <div data-testid="tasksList" key={task.id} className="2xl:w-full xs:w-full 2xl:h-1/6 xs:h-full xs:flex xs:flex-row xs:justify-between xs:items-center xs:border-b-2 xs:border-white xs:mt-3 xs:pb-3">
                <div data-testid={getStatus(filter) + "-tasksList-tasks"} className="2xl:w-1/4 xs:w-1/5 2xl:h-full xs:flex xs:justify-center xs:items-center  "><span className="2xl:w-full xs:max-w-full xs:text-center lg:text-lg xs:text-white xs:text-xs xs:truncate 2xl:font-bold">{task.task}</span></div>
                <div data-testid={getStatus(filter) + "-tasksList-desc" } className="2xl:w-1/4 xs:w-1/5 2xl:h-full xs:flex xs:justify-center xs:items-center break-words"><span className="2xl:w-full xs:max-w-full xs:text-xs lg:text-lg xs:text-center  line-clamp-3  xs:text-white">{task.description}</span></div>
                <div data-testid={getStatus(filter) + "-tasksList-status"} className="2xl:w-1/4 xs:w-1/5 2xl:h-full xs:flex xs:justify-center xs:items-center "><span className={`2xl:w-full xs:w-full xs:text-center xs:text-xs lg:text-lg lg:font-bold xs:truncate ${task.status === "Active" ? "text-red-600": "text-green-600"}`}>{task.status}</span></div>
                <div className="2xl:w-1/4 xs:w-1/5 2xl:h-full xs:flex xs:justify-center xs:items-center ">
                    <select data-testid = "change-status" className="lg:w-2/4 xs:w-full xs:bg-[#1e2732]  xs:text-sm lg:text-lg xs:text-white" value={task.status} onChange={(e) => changeStatus(e.target.value,task.id)}>
                        <option value="Active" className="xs:text-sm">Active</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="2xl:w-1/4 xs:w-1/5 2xl:h-full lg:h-full xs:flex xs:justify-center xs:items-center"><button className="2xl:w-2/4 lg:w-2/4 sm:w-3/4 xs:w-full xs:h-full lg:h-full h-3/5 rounded-2xl text-[#1e2732] xs:text-xs font-semibold bg-white hover:bg-[#1e2732] hover:text-white hover:border hover:border-white transition duration-200 delay-100" onClick={() => handleDelete(task.id)}>Delete</button></div>
            </div> )}
            </div>
            </div>
        </div>
                
    )
}

export default TasksList