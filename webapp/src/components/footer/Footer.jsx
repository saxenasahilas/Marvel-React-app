import React from 'react';
import styles from '../../styles/footer.module.scss';
import footerdata from './_Footer_menu_data';
import Footermenu from './Footermenu';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLogo}>
      <img className={styles.logo} src="./assets/logo-white.svg" alt="Logo" /> {/* Logo image */}
    </div>
      {footerdata.map((menuitem) => (
        <Footermenu key={menuitem.id} {...menuitem} /> // Render menu items using the Footermenu component
      ))}
  </footer>
);

export default Footer;
