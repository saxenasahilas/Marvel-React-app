import React from 'react';
import styles from '../styles/hero.module.css';
import Button from './_includes/Button';

const Hero = () => {
  // Define content for the hero section
  const heroContent = {
    title: 'Lets build the future of design, now',
    description: 'Create amazing tools and integrations for 1 million users or customize Marvel for your team',
  };

  // Define an array of buttons for the hero section
  const buttons = [
    { title: 'Submit your app', buttonType: 'primary-btn' },
    { title: 'View API Docs', buttonType: 'secondary-btn' },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2>{heroContent.title}</h2>
        <p>{heroContent.description}</p>
        <div className={styles.buttonGroups}>
          {buttons.map((button, index) => (
            // Render Button components for each button item
            <Button key={index} title={button.title} button={button.buttonType} />
          ))}
        </div>
      </div>
      <img src="./assets/illustration.png" alt="illustration" />
    </section>
  );
};

export default Hero;
