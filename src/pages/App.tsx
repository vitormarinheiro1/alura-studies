import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import styles from './styles.module.scss'
import Cronometro from '../components/Cronometro';
import { Itask } from '../types/tarefa';
import Button from '../components/Button';

export default function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [selecionado, setSelecionado] = useState<Itask>();
  const [ocultar, setOcultar] = useState<boolean>();

  function selecionaTarefa(tarefaSelecionada: Itask) {
    setSelecionado(tarefaSelecionada);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(task => ({
      ...task,
      selecionado: task.id === tarefaSelecionada.id ? true : false
    })));
}

  function finalizarTarefa() {
    setSelecionado(undefined);
    if (selecionado) {
      setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
      
    </div>
  );
}
