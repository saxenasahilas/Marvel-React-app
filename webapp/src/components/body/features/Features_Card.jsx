import React from 'react';
import styles from '../../../styles/features.module.scss';

const FeaturesCard = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.featuresCard}>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeaturesCard;
