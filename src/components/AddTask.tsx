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
        <form className="2xl:w-2/4 xs:w-full 2xl:h-2/5 sm:h-2/5 xs:h-1/4 2xl:flex-col 2xl:justify-around 2xl:items-center xs:flex xs:flex-col xs:justify-between xs:items-center 2xl:mt-5 sm:mt-5 xs:mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="2xl:w-2/3 lg:w-3/4  xs:w-full lg:h-1/4 sm:h-2/5 2xl:flex-row lg:flex-row 2xl:justify-between 2xl:items-center xs:flex xs:flex-col xs:justify-center xs:items-center lg:space-x-5 lg:space-y-0 xs:space-x-0 xs:space-y-3">
                <input hidden {...register("id")} value={Math.ceil(Math.random()*100)}/>
                <input {...register("task")}  type="text" className="2xl:w-2/4 xs:w-3/4 lg:h-3/4 xs:h-2/4 xs:px-2 2xl:rounded-3xl sm:rounded-2xl xs:rounded-lg xs:border xs:border-white xs:bg-[#1e2732] xs:text-white" placeholder="Task Title" required/>
                <select {...register("status")} className="2xl:w-2/4 lg:h-3/4 xs:h-2/4 2xl:rounded-3xl sm:rounded-2xl xs:rounded-lg xs:w-3/4 xs:px-2 xs:border xs:border-white xs:bg-[#1e2732] xs:text-white" required>
                    <option value="">Status</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="2xl:w-2/3 xs:w-full 2xl:h-1/3 xs:h-2/5 xs:flex xs:justify-center xs:items-center">
                <textarea {...register("description")} className="2xl:w-full xs:w-3/4 xs:p-2 lg:h-full sm:h-3/4 xs:h-full xs:rounded-xl xs:border xs:border-white xs:bg-[#1e2732] xs:text-white" placeholder="Description" required/>
            </div>
            <input  type="submit" className="lg:w-1/5 sm:w-2/6 xs:w-2/4 2xl:h-1/5 xs:h-1/5 xs:bg-white xs:text-[#1e2732] xs:rounded-2xl xs:font-bold sm:text-2xl hover:bg-[#1e2732] hover:text-white hover:border hover:border-white transition duration-200 delay-100 cursor-pointer"/>
        </form>
    )
}

export default AddTask