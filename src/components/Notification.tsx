import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <p>
        {notification.message?.startsWith('No results') ? (
          <>
            {notification.message}
            <Link to={'available-queries'}>&nbsp; See available queries</Link>
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
