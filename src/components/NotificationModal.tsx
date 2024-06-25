import { createPortal } from 'react-dom';
import { IoCheckmarkDone } from 'react-icons/io5';
import Badge from './Badge';
import { useContext, useState } from 'react';
import NotificationContext from '../context/NotificationContext';
import NotificationCard from './NotificationCard';

type NotificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
  const { notifications, markAllAsRead, newNotifications } =
    useContext(NotificationContext);
  const [currentTab, setCurrentTab] = useState(0);
  if (!isOpen) return null;

  const currentNotifications =
    currentTab === 0 ? notifications : newNotifications;

  const modalRoot = document.getElementById('notification-modal');
  if (!modalRoot) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded w-[40%] h-[80%] mt-[5%] mr-[5%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-[fit-content]">
          <h2 className="text-xl font-bold">Notifications</h2>
          <Badge />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => setCurrentTab(0)}
            className="flex-1 px-2 py-1 border text-black rounded-full"
          >
            All notifications
          </button>
          <button
            onClick={() => setCurrentTab(1)}
            className="flex-1 px-4 py-2 border text-black rounded-full bg-gray-300"
          >
            Unread Notifications
          </button>
          <div
            className="flex items-center gap-2 text-sm flex-1 cursor-pointer"
            onClick={() => {
              markAllAsRead();
            }}
          >
            <IoCheckmarkDone className="w-6 h-6 text-[royalblue]" />
            <p className="text-[royalblue]">Mark all as read</p>
          </div>
        </div>
        <div className="w-full h-full overflow-y-scroll mt-4 max-h-[calc(100%-8rem)]">
          {currentNotifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default NotificationModal;
