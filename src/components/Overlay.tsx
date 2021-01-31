import { useContext } from 'react';
import { UploadRecipeFormContext } from '../contexts/UploadRecipeForm.context';
import styles from '../styles/Overlay.module.css';
import UploadRecipeForm from './UploadRecipeForm';

const Overlay = () => {
  // Consuming context
  const { isOverlayShowing, toggleOverlay } = useContext(
    UploadRecipeFormContext
  );

  return (
    <div
      className={`${styles.Overlay} ${isOverlayShowing ? '' : styles.Hidden}`}
      onClick={toggleOverlay}
    >
      <UploadRecipeForm />
    </div>
  );
};

export default Overlay;
