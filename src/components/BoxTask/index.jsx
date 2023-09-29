import Task from "../Task"
import InputText from "../InputText";
import Styles from "./style.module.css"
import { useEffect, useState } from "react";

function BoxTask() {
    const [list, setList] = useState([])
    const [task, setTask] = useState("")

    useEffect(() => {
        if (task !== "") {
            setList([...list, task])
            setTask("")
        }
    }, [task, list])

    const addTask = (item) => {
        const newItem = {
            id: Math.random(),
            task: item
        }
        setTask(newItem)
    }

    const deleteTask = (id) => {
        const newList = list.filter((item) => item.id !== id)
        setList(newList)
    }

    return (
        <>
        <InputText handleInput={addTask}/>
        <div className={`${Styles.indicator} ${Styles.container}`}>
            <p>Tecnologias criadas <span>0</span></p>
            <p style={{color:"#8284FA"}}>Concluídas <span>0</span></p>
        </div>
        {/* <div className={`${Styles.boxText} ${Styles.container}`}>
            <h3>Você ainda não tem tecnologias cadastradas</h3>
            <p>Crie tecnologia e organize seus itens a fazer</p>
        </div> */}
        <Task customClass={Styles.container} listTasks={list} handleDelete={deleteTask}/>
        </>
    )
}

export default BoxTask