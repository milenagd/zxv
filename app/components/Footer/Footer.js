import React from 'react';
import styles from './Footer.css';
import SocialMedia from '../SocialMedia';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.footerInfo}>
      <div className={styles.about}>
        <span className={styles.title}>Zé Delivery</span>
        <ul className={styles.list}>
          <li className={styles.listItems}>Como funciona?</li>
          <li className={styles.listItems}>Termos de Condições e Política
          de Privacidade</li>
        </ul>
      </div>
      <div className={styles.contact}>
        <span className={styles.title}>Contato</span>
        <ul className={styles.list}>
          <li className={styles.listItems}>Fale com a gente</li>
        </ul>
      </div>
      <SocialMedia />
    </div>
    <div className={styles.footerCopyRight}>
      <div>Zé</div>
      <div>© 2017 Zé Delivery - Todos os direitos reservados.</div>
      <div>Beba com moderação</div>
    </div>
  </footer>
);

export default Footer;
