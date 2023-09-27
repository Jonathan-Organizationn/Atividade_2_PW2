import { AiOutlinePlusCircle } from "react-icons/ai";
import Styles from "./style.module.css";

function InputText() {
  return (
    <div className={Styles.container}>
      <input type="text" placeholder="Adicione uma nova tecnologia"/>
      <button>
        Criar <AiOutlinePlusCircle style={{fontSize:"1.2em"}}/>
      </button>
    </div>
  );
}

export default InputText;
