import Task from "../Task"
import InputText from "../InputText";
import Styles from "./style.module.css"

function BoxTask() {
    return (
        <>
        <InputText />
        <div className={`${Styles.indicator} ${Styles.container}`}>
            <p>Tecnologias criadas <span>0</span></p>
            <p style={{color:"#8284FA"}}>Concluídas <span>0</span></p>
        </div>
        {/* <div className={`${Styles.boxText} ${Styles.container}`}>
            <h3>Você ainda não tem tecnologias cadastradas</h3>
            <p>Crie tecnologia e organize seus itens a fazer</p>
        </div> */}
        <Task customClass={Styles.container} />
        </>
    )
}

export default BoxTask