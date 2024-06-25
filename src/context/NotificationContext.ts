import { createContext } from 'react';

export type NotificationItem = {
    id: string,
    type: 'Request' | 'Status change to on hold' | 'New feature',
    content: string,
    isRead: boolean,
    icon: string,
};

type NotificationContextType = {
    notifications: NotificationItem[];
    setNotifications: (notifications: NotificationItem[]) => void;
    resetNotifications: () => void;
    newNotificationsCount: number;
    markOneMessageAsRead: (id: string) => void;
    markAllAsRead: () => void;
    newNotifications: NotificationItem[];
    getMessageById: (id: string) => NotificationItem | undefined;
}

const NotificationContext = createContext<NotificationContextType>({
    notifications: [],
    setNotifications: () => { },
    resetNotifications: () => { },
    markOneMessageAsRead: () => { },
    markAllAsRead: () => { },
    newNotificationsCount: 0,
    newNotifications: [],
    getMessageById: () => undefined,
});

export default NotificationContext;
