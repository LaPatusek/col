import React from 'react';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <h1>Main</h1>
    </div>
  );
};

export default Main;
