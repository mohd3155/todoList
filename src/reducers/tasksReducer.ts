export interface Task{
    id:number,
     task:string,
     description : string,
     status:string
 }

 interface TaskState{
    allTasks : Task[],
    filter: string,
    filteredTasks: Task[],
 }

 interface AddTask{
    type:"ADD",
    task: Task,
 }

 interface DeleteTask{
    type:"DELETE",
    taskId:number
 }

 interface ChangeStauts{
    type: "CHANGE",
    value:string,
    taskId:number
 }

 interface FilterTask{
    type:"FILTER",
    value:string
 }

export type TaskAction = AddTask | DeleteTask | ChangeStauts | FilterTask;

export const initialState: TaskState = {
    allTasks: [], 
    filter: "all",
    filteredTasks: [], 
  };

const TaskReducer = (tasks:TaskState , action:TaskAction): TaskState => {
    switch(action.type){
        case "ADD":
            const newTaskList = [action.task, ...tasks.filteredTasks];
            const updatedTasks = [action.task, ...tasks.allTasks];
            return {
                ...tasks,
                allTasks: updatedTasks,
                filteredTasks : newTaskList
            };

        case "DELETE" : 
            const filteredAfterDelete = tasks.filteredTasks.filter(task => task.id !== action.taskId)
            const allAfterDelete = tasks.allTasks.filter(task => task.id !== action.taskId)
            return{
                ...tasks,
                allTasks : allAfterDelete,
                filteredTasks : filteredAfterDelete
            }
        
        case "CHANGE" :
            const filteredAfterChange = tasks.filteredTasks.map(task => task.id === action.taskId ? {...task, status:action.value} : task)
            const allAfterChange = tasks.allTasks.map(task => task.id === action.taskId ? {...task , status:action.value}:task)
            return{
                ...tasks,
                allTasks : filteredAfterChange,
                filteredTasks : allAfterChange
            }
        case "FILTER" :
            if(action.value === "all"){
                return {
                    ...tasks, filteredTasks: tasks.allTasks, filter: action.value
                }
            }
            return{
                ...tasks, filteredTasks : tasks.allTasks.filter(task => task.status === action.value), filter: action.value
            }

            default:
            return tasks;
    }
    
}

export default TaskReducer;