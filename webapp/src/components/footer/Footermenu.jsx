import React from 'react';
import styles from '../../styles/footer.module.css';

const Footermenu = ({ title, submenu }) => (
  <div className={styles.footerColumn}>
    <h4>{title}</h4> {/* Render the menu title */}
    {submenu.map((item, index) => (
      <a key={index} href="#">
        {item}
      </a> // Render individual menu items and provide links
    ))}
  </div>
);

export default Footermenu;
