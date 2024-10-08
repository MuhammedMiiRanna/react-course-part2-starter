import { createContext } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

export interface TasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TasksContext = createContext({} as TasksContextType);

export default TasksContext;
