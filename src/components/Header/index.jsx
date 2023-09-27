import InputText from "../InputText";
import Styles from "./style.module.css";

function Header() {
    return (
        <div className={Styles.background}>
            <p>Minha lista de Tecnologias</p>
            <InputText />
        </div>
    )
}

export default Header