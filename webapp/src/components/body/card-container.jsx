import React from 'react';
import Horizontalcard  from './horizontal-card';
import integrationData from './integrationData';
import styles from '../../styles/integration.module.css';

const Integrations = () => (
  <section className={styles.integration}>
    {integrationData.map((data, index) => 
      // Render Integration components for each data item in integrationData
      <Horizontalcard  key={index} {...data} />
    )}
  </section>
);

export default Integrations;
