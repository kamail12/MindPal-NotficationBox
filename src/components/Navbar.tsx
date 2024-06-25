import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import NotificationModal from './NotificationModal';
import Badge from './Badge';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">
        Logo
      </Link>
      <div className="relative">
        <FaBell
          className="w-6 h-6 cursor-pointer"
          onClick={toggleNotification}
        />
        <Badge />
      </div>
      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={toggleNotification}
      />
    </div>
  );
};

export default Navbar;
