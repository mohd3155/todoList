

const AddTask =()=>{
    return (
        <form className="w-2/4 h-2/5 flex flex-col justify-around items-center mt-5 border border-black">
            <div className="w-1/3 h-1/4 flex flex-col justify-between items-center ">
                <input  type="text" className="w-full px-1 border border-black" placeholder="Task Title"/>
                <select className="w-full border border-black">
                    <option>Status</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="w-2/4 h-1/3 flex justify-center items-center">
                <textarea className="w-full p-1 border h-full border-black" placeholder="Description"/>
            </div>
            <input type="submit" className="w-1/5 h-1/5 border border-black"/>
        </form>
    )
}

export default AddTask