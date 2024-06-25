import { useEffect, useState } from 'react';
import { notificationsMock } from '../assets/mocks';
import { NotificationItem } from '../context/NotificationContext';

const parseStringToArray = (str: string | null) => {
  if (!str) return [];

  try {
    return Array.from(JSON.parse(str)) as NotificationItem[];
  } catch (error) {
    return [];
  }
};

const useLocalData = () => {
  const localData = localStorage.getItem('data');
  const [data, setData] = useState<NotificationItem[]>(parseStringToArray(localData));

  useEffect(() => {
    const localData = localStorage.getItem('data');
    if (!localData) {
      setData(notificationsMock);
    }
  }, []);

  const resetNotifications = () => {
    setData(notificationsMock);
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return { data, setData, resetNotifications };
};

export default useLocalData;
