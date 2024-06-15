import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
