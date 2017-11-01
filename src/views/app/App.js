import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';

import styles from './App.css';

const App = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
