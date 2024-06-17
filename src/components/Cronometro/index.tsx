import Button from "../Button";
import Relogio from "./Relogio";
import styles from './styles.module.scss'

export default function Cronometro() {
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Choose a card and start the timer</p>
            <div className={styles.relogioWrapper}>
                <Relogio />
            </div>
            <Button
                text="Começar"
            />
        </div>
    )
}