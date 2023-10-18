import {useState} from 'react';
import styles from '../styles/navbar.module.css';
import Button from './_includes/Button';
import {CloseIcon, MenuIcon} from './_includes/Icons';

const Navbar = () => {

  const close = () => {
    document.getElementById("element").classList.remove(styles.close);
  }

  const open = () => {
    document.getElementById("element").classList.add(styles.close);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="./assets/logo-white.svg" alt="Logo" /> | Developers
      </div>
      <MenuIcon handleClick={open} />
      <div className={styles.collapse} id="element">
        <CloseIcon handleClick={close} />
        <div className={styles.navLinks}>
        <select>
          <option>Why Marvel</option>
        </select>
        {renderNavLinks()} {/* Render navigation links using a helper function */}
        <Button title="Sign up free" button="secondary-btn" />
        </div>
      </div>

    </nav>
  );
}

// Helper function to render navigation links
const renderNavLinks = () => {
  const links = [
    { text: 'Enterprise', href: '#' },
    { text: 'Pricing', href: '#' },
    { text: 'Sign in', href: '#' }
  ];

  return (
    <>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.text}
        </a>
      ))}
    </>
  );
}

export default Navbar;
