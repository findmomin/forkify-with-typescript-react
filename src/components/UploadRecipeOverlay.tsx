import { useContext } from 'react';
import { UploadRecipeFormContext } from '../contexts/UploadRecipeForm.context';
import styles from '../styles/UploadRecipeOverlay.module.css';
import UploadRecipeForm from './UploadRecipeForm';

const UploadRecipeOverlay = () => {
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

export default UploadRecipeOverlay;
