import React, { useState } from 'react';
import Button from '../Button';
import styles from './styles.module.scss';
import { Itask } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
}

export default function Form({ setTasks}: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00")
  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTasks(tasksAntigas =>
      [
        ...tasksAntigas,
        {
          task,
          time,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    );
    setTask("");
    setTime("00:00")
  }

  return (
    <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">
          Add a new card
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={evento => setTask(evento.target.value )}
          placeholder="What do you want to study?"
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
          value={time}
          onChange={evento => setTime(evento.target.value )}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">ADD</Button>
    </form>
  )
}
