import { Itask } from '../../types/tarefa'
import Item from './Item'
import styles from './styles.module.scss'

export default function List({ tasks }: { tasks: Itask[]}) {

  return (
    <aside className={styles.listaTarefas}>
      <h2>
        Studies of day
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}