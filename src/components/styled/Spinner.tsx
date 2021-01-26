import icons from '../../Images/icons.svg';
import styles from '../../styles/Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
      <svg>
        <use href={`${icons}#icon-loader`}></use>
      </svg>
    </div>
  );
};

export default Spinner;
