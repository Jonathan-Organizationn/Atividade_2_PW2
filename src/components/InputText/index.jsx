import { AiOutlinePlusCircle } from "react-icons/ai";
import Styles from "./style.module.css";
import { useState } from "react";

function InputText() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([])
  function addTask(item) {
    const Item = {
      id: Math.random(),
      task: item
    }
    setList([...list, Item])
    setInput("")
    console.log(list)
  }
  return (
    <div className={Styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tecnologia"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTask(input)}>
        Criar <AiOutlinePlusCircle style={{ fontSize: "1.2em" }} />
      </button>
    </div>
  );
}

export default InputText;
