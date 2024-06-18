import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import styles from './styles.module.scss'
import Cronometro from '../components/Cronometro';
import { Itask } from '../types/tarefa';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [selecionado, setSelecionado] = useState<Itask>();

  function selecionaTarefa(tarefaSelecionada: Itask) {
    setSelecionado(tarefaSelecionada);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(task => ({
      ...task,
      selecionado: task.id === tarefaSelecionada.id ? true : false

  })));
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
