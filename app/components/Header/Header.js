import React from 'react';
import styles from './Header.css';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.logo}>Zé Delivery de Bebidas</div>
    <button className={styles.loginButton}>Entrar</button>
  </header>
);

export default Header;
