import {FC,createContext, Dispatch, ReactNode, useReducer } from "react";
import TaskReducer, { initialState, Task, TaskAction } from "../reducers/tasksReducer";

interface TaskContextType {
    tasks:Task[],
    dispatch : Dispatch<TaskAction>
}

const TasksContext = createContext<TaskContextType>({} as TaskContextType)

export const TasksProvider: FC<{children: ReactNode}> = (props: {children:ReactNode}) => {
    const [tasks,dispatch] = useReducer(TaskReducer,initialState)

    return (
        <TasksContext.Provider value={{tasks: tasks.filteredTasks, dispatch}}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksContext;