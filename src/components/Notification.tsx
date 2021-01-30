import { useContext } from 'react';
import {
  NotificationContext,
  NotificationSetter,
} from '../contexts/Notification.context';
import styles from '../styles/Notification.module.css';

const Notification = () => {
  // Consuming context
  const notification = useContext(NotificationContext);
  const setNotification = useContext(NotificationSetter);

  return (
    <div
      className={`${styles.Notification} ${
        notification.type === 'success' ? styles.Success : styles.Error
      } ${notification.isShowing ? '' : styles.Hidden}`}
    >
      <p>{notification.message}</p>
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
