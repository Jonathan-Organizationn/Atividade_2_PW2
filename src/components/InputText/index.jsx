import { AiOutlinePlusCircle } from "react-icons/ai";
import Styles from "./style.module.css";
import { useState } from "react";

function InputText({ handleInput }) {
  const [input, setInput] = useState("");

  function addInput() {
    handleInput(input);
    setInput("");
  }

  return (
    <div className={Styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tecnologia"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addInput}>
        Criar <AiOutlinePlusCircle style={{ fontSize: "1.2em" }} />
      </button>
    </div>
  );
}

export default InputText;
