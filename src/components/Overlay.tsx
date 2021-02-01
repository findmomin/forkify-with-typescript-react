import { useContext } from 'react';
import { OverlayContext } from '../contexts/Overlay.context';
import styles from '../styles/Overlay.module.css';
import AvailableQueriese from './AvailableQueries';
import UploadRecipeForm from './UploadRecipeForm';

const Overlay = () => {
  // Consuming context
  const { isOverlayShowing, activeComp, toggleOverlay } = useContext(
    OverlayContext
  );

  return (
    <div
      className={`${styles.Overlay} ${isOverlayShowing ? '' : styles.Hidden}`}
      onClick={() => toggleOverlay!({ isOverlayShowing: false, activeComp })}
    >
      {activeComp === 'FORM' ? <UploadRecipeForm /> : <AvailableQueriese />}
    </div>
  );
};

export default Overlay;
