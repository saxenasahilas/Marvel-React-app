import React from 'react';
import styles from '../../styles/footer.module.css';
import footerdata from './_Footer_menu_data';
import Footermenu from './Footermenu';

const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.logo} src="./assets/logo-white.svg" alt="Logo" /> {/* Logo image */}
    {footerdata.map((menuitem) => (
      <Footermenu key={menuitem.id} {...menuitem} /> // Render menu items using the Footermenu component
    ))}
  </footer>
);

export default Footer;
