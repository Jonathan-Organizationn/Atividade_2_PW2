import Styles from "./style.module.css";
import { AiOutlineDelete } from "react-icons/ai";

function Task({ customClass, listTasks, handleDelete }) {
  return (
    <>
      {listTasks.map((Task) => (
        <div className={`${Styles.task} ${customClass}`}>
          <input type="checkbox" />
          <label className={Styles.check}></label>
          <p>{Task.task}</p>
          <button key={Task.id} onClick={() => handleDelete(Task.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      ))}
    </>
  );
}

export default Task;
