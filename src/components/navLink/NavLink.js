import React from 'react';
import { Link } from 'react-router'

import styles from './NavLink.css';

const NavLink = (props) => {
  return (
    <Link {...props} activeClassName={styles.active} className={styles.link} />
  );
};

export default NavLink;
