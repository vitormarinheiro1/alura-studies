import './style.scss'

export default function List() {

  const tasks = [{
    task: 'NextJS',
    time: "02:00:00"
  }, {
    task: "Jest",
    time: "01:00:00"
  }]

  return (
    <aside className='listaTarefas'>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className='item'>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}