import React from 'react';
import NavLink from '../../components/navLink/NavLink';
import logo from '../../../public/img/react-logo.png';
import data from '../../utils/tabs.json';

import styles from './Header.css';

const tabs = data;

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <ul className={styles.mainMenu}>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <NavLink to={`/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
