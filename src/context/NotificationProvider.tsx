import NotificationContext from './NotificationContext';
import useLocalData from '../hooks/useLocalData';

interface NotificationProviderProps {
  children: React.ReactNode;
}

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const {
    data: notifications,
    setData: setNotifications,
    resetNotifications,
  } = useLocalData();

  const newNotifications = notifications.filter(
    (notification) => !notification.isRead
  );

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const markOneMessageAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const getMessageById = (id: string) => {
    return notifications.find((notification) => notification.id === id);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        markAllAsRead,
        newNotificationsCount: newNotifications.length,
        newNotifications,
        markOneMessageAsRead,
        getMessageById,
        resetNotifications,
        setNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
