import { useContext} from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import TasksContext from "../contexts/tasksContexts"

enum StatusEnum{
    active ="active",
    completed = "completed"
}
interface IFormInput{
    id: number,
    task : string,
    description : string,
    status : StatusEnum
}

const AddTask =()=>{

    const{tasks , dispatch} = useContext(TasksContext)    


    const { register, handleSubmit, reset } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        dispatch({type:"ADD", task:{id : data.id, task:data.task, description : data.description, status : data.status}})
        reset()
    }

    console.log(tasks)
    return (
        <form className="w-2/4 h-2/5 flex flex-col justify-around items-center mt-5 border border-black" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-1/3 h-1/4 flex flex-col justify-between items-center ">
                <input hidden {...register("id")} value={Math.ceil(Math.random()*100)}/>
                <input {...register("task")}  type="text" className="w-full px-1 border border-black" placeholder="Task Title" required/>
                <select {...register("status")} className="w-full border border-black" required>
                    <option value="">Status</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="w-2/4 h-1/3 flex justify-center items-center">
                <textarea {...register("description")} className="w-full p-1 border h-full border-black" placeholder="Description" required/>
            </div>
            <input  type="submit" className="w-1/5 h-1/5 border border-black"/>
        </form>
    )
}

export default AddTask