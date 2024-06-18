import { Itask } from '../../../types/tarefa'
import styles from './styles.module.scss'

interface Props extends Itask {
    selecionaTarefa: (tarefaSelecionada: Itask) => void
}

export default function Item({ task, time, selecionado, completado, id, selecionaTarefa }: Props) {
    return (
        <li
            className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''}`}
            onClick={() => selecionaTarefa(
                {
                    task,
                    time,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}