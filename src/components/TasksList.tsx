

const TasksList = () => {
    const tasks= [{
        id : 1,
        name : "Math Homework",
        description : "solve the tringle exercises on page 55 of school math book",
        status : "Active"
    },{
        id : 2,
        name : "Exercise Homework",
        description : "solve the tringle exercises on page 55 of school math book",
        status : "Active"
    },{
        id : 3,
        name : "Exercise Homework",
        description : "solve the tringle exercises on page 55 of school math book",
        status : "Active"
    }]

    const headers = ["Task", "Description", "Status", "Change status", "Delete"]
    return (
        <div className="w-3/4 h-3/5 flex flex-col justify-center items-center">
            <div className="w-full h-1/6 flex border border-black ">
            {headers.map((header,index) => 
                <div key={index+1} className="w-1/4 h-full flex justify-center items-center"><span className="w-full text-2xl font-bold text-center">{header}</span></div>
            )}
            </div>
            {tasks.map((task,index) => <div key={index + 1} className="w-full h-1/6 flex ">
                <div className="w-1/4 h-full flex justify-center items-center"><span className="w-full  text-center">{task.name}</span></div>
                <div className="w-1/4 h-full flex justify-center items-center break-words"><p className="w-full text-center line-clamp-3">{task.description}</p></div>
                <div className="w-1/4 h-full flex justify-center items-center"><span className="w-full text-center">{task.status}</span></div>
                <div className="w-1/4 h-full flex justify-center items-center">
                    <select className="w-2/4">
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="w-1/4 h-full flex justify-center items-center"><button className="w-2/4">Delete</button></div>
            </div> )}
        </div>
    )
}

export default TasksList