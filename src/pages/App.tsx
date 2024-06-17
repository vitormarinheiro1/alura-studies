import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import styles from './styles.module.scss'
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
