import React from 'react';
import Button from '../Button';
import styles from './styles.module.scss';
import { Itask } from '../../types/tarefa';


class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
}> {
  state = {
    task: "",
    time: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTasks(tasksAntigas => 
        [
            ...tasksAntigas,
            {
              task: this.state.task,
              time: this.state.time,
          }
        ]
      )
     
    this.setState({
      task: "",
      time: "00:00"
    })
  }

  render() {
    return (
      <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">
            Add a new card
          </label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={evento => this.setState({ ...this.state, task: evento.target.value })}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="time">
            Time
          </label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.time}
            onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit" text='Add' />
      </form>
    )
  }
}

export default Form;