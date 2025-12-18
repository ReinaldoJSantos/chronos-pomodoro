import { PlayCircleIcon, ScanSearch } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../Context/TaskContext/useTaskContext";

export function MainForm() {
  // const [TaskName, setTaskName] = useState('');
  const {setState} = useTaskContext(),
  const taskNameInput = useRef<HTMLInputElement>(null)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa!')
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime'

    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
    return (
      <form onSubmit={handleCreateNewTask} className="form" action="">
        <div className="formRow">
          <DefaultInput
            labelText="task"
            id="meuInput"
            type="text"
            placeholder="Digite algo"
            ref={taskNameInput}
          />
        </div>

        <div className="formRow">
          <p>O próximo intervalo é de 25 min.</p>
        </div>

        <div className="formRow">
          <span>
            <Cycles />
          </span>
          <div className="cycleDots">
            <span className="cycleDot"></span>
          </div>
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    );
}