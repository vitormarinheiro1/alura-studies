import { Itask } from '../../types/tarefa'
import Item from './Item'
import styles from './styles.module.scss'

interface Props {
  tasks: Itask[],
  selecionaTarefa: (tarefaSelecionada: Itask) => void
}

export default function List({ tasks, selecionaTarefa }: Props) {

  return (
    <aside className={styles.listaTarefas}>
      <h2>
        Studies of day
      </h2>
      <ul>
        {tasks.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}