import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationContext from '../context/NotificationContext';

type NotificationCardProps = {
  notification: any;
  onClose: () => void;
};

const NotificationCard = ({ notification, onClose }: NotificationCardProps) => {
  const { content, isRead, icon } = notification;
  const { markOneMessageAsRead } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleClick = () => {
    markOneMessageAsRead(notification.id);
    navigate(`/message/${notification.id}`);
    onClose();
  };

  const handleMarkAsReadClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    markOneMessageAsRead(notification.id);
  };

  return (
    <div
      className={`flex space-x-2 items-center p-4 rounded-lg shadow-sm mt-4 ${
        !isRead ? 'bg-gray-200' : 'white'
      }`}
      onClick={handleClick}
    >
      <img className="w-6 h-6" src={icon} alt="icon" />
      <div
        className="flex-1"
        //This is a dangerous options and not preferable to use in production
        //Preferably some markup library instead
        dangerouslySetInnerHTML={{ __html: content }}
        onClick={handleClick}
      />
      {!isRead && (
        <div
          className="w-3 h-3 max-w-3 max-h-3 bg-blue-500 rounded-full"
          onClick={handleMarkAsReadClick}
        ></div>
      )}
    </div>
  );
};

export default NotificationCard;
