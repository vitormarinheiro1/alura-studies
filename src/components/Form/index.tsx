import Button from "../Button";
import styles from './styles.module.scss'

export default function Form() {
    return (
        <form className={styles.novaTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="task">Add a new task</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="What do you want to study?"
                    required
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button />
        </form>
    )
}