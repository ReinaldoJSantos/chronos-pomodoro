import { useState } from "react";
import { TaskContext } from "./TaskContext/TaskContext";
import { initialTaskState } from "./TaskContext/initialTaskState";

type TaskContextProviderProps = {
  children: React.ReactNode;
};
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
