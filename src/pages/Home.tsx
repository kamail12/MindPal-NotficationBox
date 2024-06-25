import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

const Home = () => {
  const { resetNotifications } = useContext(NotificationContext);
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <button
        onClick={resetNotifications}
        className="px-4 py-2 bg-gray-200 rounded-md mt-2"
      >
        Reset Notifications
      </button>
    </div>
  );
};

export default Home;
