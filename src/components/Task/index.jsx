import Styles from "./style.module.css"
import { AiOutlineDelete } from "react-icons/ai"

function Task({customClass}) {
    return (
        <>
        <div className={`${Styles.task} ${customClass}`}>
            <input type="checkbox" />
            <label className={Styles.check}></label>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam magni modi pariatur sit cum. Dolorem sint maiores rem explicabo dignissimos aliquam ex fuga minus, reprehenderit saepe reiciendis autem quo expedita.</p>
            <button><AiOutlineDelete /></button>
        </div>
        </>
    )
}

export default Task