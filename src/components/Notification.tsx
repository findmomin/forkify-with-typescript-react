import { useContext } from 'react';
import {
  NotificationContext,
  NotificationSetter,
} from '../contexts/Notification.context';
import { OverlayContext } from '../contexts/Overlay.context';
import styles from '../styles/Notification.module.css';

const Notification = () => {
  // Consuming context
  const notification = useContext(NotificationContext);
  const setNotification = useContext(NotificationSetter);
  const { toggleOverlay } = useContext(OverlayContext);

  return (
    <div
      className={`${styles.Notification} ${
        notification.type === 'success' ? styles.Success : styles.Error
      } ${notification.isShowing ? '' : styles.Hidden}`}
    >
      <p>
        {notification.message?.startsWith('No results') ? (
          <>
            {notification.message}
            <span
              onClick={() => {
                toggleOverlay!({
                  isOverlayShowing: true,
                  activeComp: 'QUERIES',
                });

                setNotification({ ...notification, isShowing: false });
              }}
            >
              &nbsp; See available queries
            </span>
          </>
        ) : (
          notification.message
        )}
      </p>
      <button
        className={styles.Close}
        onClick={() => setNotification({ ...notification, isShowing: false })}
      >
        X
      </button>
    </div>
  );
};

export default Notification;
