import styles from '../../styles/integration.module.css';
import Button from '../_includes/Button';

const Horizontalcard = (props) => {
  const {id, title, description, buttons, imageSrc} = props;

  const isReversed = () => id % 2 !== 0 ? `${styles.integrationCard} ${styles.reverse}` : styles.integrationCard;

  return (
    // Render the component with dynamic CSS classes based on 'isReversed' function
    <div className={isReversed()}> 
      <div className={styles.integrationheading}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.buttonGroups}>
          <Button title={buttons[0]} button="secondary-btn"/>
          <Button title={buttons[1]} button="borderless-btn"/>
        </div>
      </div>
      <img src={imageSrc} alt="advantages" />
    </div>
  );
};

export default Horizontalcard;
