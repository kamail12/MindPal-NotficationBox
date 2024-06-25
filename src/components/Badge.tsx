import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

const Badge = () => {
  const { newNotificationsCount } = useContext(NotificationContext);
  if (newNotificationsCount === 0) {
    return null;
  }

  return (
    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
      {newNotificationsCount}
    </span>
  );
};

export default Badge;
