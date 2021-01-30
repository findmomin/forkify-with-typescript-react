import React, { createContext, useEffect, useState } from 'react';
import { NOTIFICATION_TIMEOUT } from '../constants';

interface Notification {
  message?: string;
  type?: 'success' | 'error';
  isShowing: boolean;
}

export const NotificationContext = createContext<Partial<Notification>>({});
export const NotificationSetter = createContext<
  (notification: Notification) => void
>(() => {});

export const NotificationProvider: React.FC = ({ children }) => {
  // State
  const [notification, setNotification] = useState<Notification>({
    message: '',
    type: 'success',
    isShowing: false,
  });

  // After a specified time reset the message
  useEffect(() => {
    if (!notification.isShowing) return;

    setTimeout(
      () => setNotification({ ...notification, isShowing: false }),
      NOTIFICATION_TIMEOUT * 1000
    );
  });

  return (
    <NotificationContext.Provider value={notification}>
      <NotificationSetter.Provider value={setNotification}>
        {children}
      </NotificationSetter.Provider>
    </NotificationContext.Provider>
  );
};
