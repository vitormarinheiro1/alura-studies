import { useState } from 'react'
import Item from './Item'
import styles from './styles.module.scss'

export default function List() {
  const [tasks, setTasks] = useState([{
    task: 'NextJS',
    time: "02:00:00"
  }, {
    task: "Jest",
    time: "01:00:00"
  }]);

  return (
    <aside className={styles.listaTarefas}>
      <h2
        onClick={() => {
          setTasks([...tasks, {task: "Study state", time: "05:00:00"}])
        }}
      >
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