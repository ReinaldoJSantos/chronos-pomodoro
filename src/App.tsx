import "./styles/theme.css";
import "./styles/global.css";
import Home from "./pages/home";
import type { TaskStateModel } from "./models/TaskStateModel";
import { useState } from "react";

const InitialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime:15,
  }

}

export default function App() {
  const [state, setState] = useState(InitialState);

  return (
    <Home state={state} setState={setState}/>
  );
}
