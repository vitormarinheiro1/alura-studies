import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import styles from './styles.module.scss'
import Cronometro from '../components/Cronometro';
import { Itask } from '../types/tarefa';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} />
      <Cronometro />
    </div>
  );
}

export default App;
