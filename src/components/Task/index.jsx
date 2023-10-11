import Styles from "./style.module.css";
import { AiOutlineDelete } from "react-icons/ai";

function Task({ customClass, listTasks, handleDelete, handleStatus }) {
  return (
    <>
      {listTasks.map((Task) => (
        <div className={`${Styles.task} ${customClass}`} key={Task.id}>
          <input
            type="checkbox"
            checked={Task.status}
            onChange={() => handleStatus(Task.id)} 
          />
          <label className={Styles.check}></label>
          <p>{Task.task}</p>
          <button onClick={() => handleDelete(Task.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      ))}
    </>
  );
}

export default Task;
