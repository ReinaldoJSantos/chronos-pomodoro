import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export function MainForm() {
  const [TaskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Deu certo", {TaskName});
  }
    return (
      <form onSubmit={handleCreateNewTask} className="form" action="">
        <div className="formRow">
          <DefaultInput
            labelText="Task"
            id="meuInput"
            type="text"
            placeholder="Digite algo"
            value={TaskName}
            onChange={e => setTaskName(e.target.value)}
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