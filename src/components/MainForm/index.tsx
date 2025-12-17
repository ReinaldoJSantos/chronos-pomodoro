import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return (
      <form className="form" action="">
        <div className="formRow">
          <DefaultInput
            labelText="Task"
            id="meuInput"
            type="text"
            placeholder="Digite algo"
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