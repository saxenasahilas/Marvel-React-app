import React from 'react';
import styles from '../../../styles/features.module.scss';
import FeaturesCard from './Features_Card';
import featureData from './features-data';

const Features = () => (
  <section className={styles.features}>
    <div className={styles.featuresHeader}>
      <h2>Experience the freedom to build features, right away</h2>
      <p>
        You can harness components of our platform and build powerful integrations
        for our 2 million users - or simply just for your team.
      </p>
    </div>
    <div className={styles.featuresCards}>
      {featureData.map((item) => (
        // Render FeaturesCard components for each item in featureData
        <FeaturesCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default Features;
