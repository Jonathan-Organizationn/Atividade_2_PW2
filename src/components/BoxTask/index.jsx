import Task from "../Task";
import InputText from "../InputText";
import Styles from "./style.module.css";
import { useEffect, useState } from "react";

function BoxTask() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (task !== "") {
      setList([...list, task]);
      setTask("");
    }
  }, [task, list]);

  useEffect(() => {
    if (list !== null && list !== "") {
      const newList = JSON.parse(localStorage.getItem("taskList"))
      setList(newList)
    }
  }, [])

  const addTask = (item) => {
    const newItem = {
      id: Math.random(),
      task: item,
      status: false,
    };
    setTask(newItem);
    localStorage.setItem("taskList", JSON.stringify([...list, newItem]))
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const changeStatus = (id) => {
    const updtadeItem = list.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setList(updtadeItem);
  };

  return (
    <>
      <InputText handleInput={addTask} />
      <div className={`${Styles.indicator} ${Styles.container}`}>
        <p>
          Tecnologias criadas <span>{list.length}</span>
        </p>
        <p style={{ color: "#8284FA" }}>
          Concluídas{" "}
          <span>
            {list.filter((item) => item.status !== false).length} de{" "}
            {list.length}
          </span>
        </p>
      </div>
      {list.length === 0 && (
        <div className={`${Styles.boxText} ${Styles.container}`}>
          <h3>Você ainda não tem tecnologias cadastradas</h3>
          <p>Crie tecnologia e organize seus itens a fazer</p>
        </div>
      )}
      <Task
        customClass={Styles.container}
        listTasks={list}
        handleDelete={deleteTask}
        handleStatus={changeStatus}
      />
    </>
  );
}

export default BoxTask;
