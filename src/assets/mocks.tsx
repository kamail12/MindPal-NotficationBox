import { NotificationItem } from '../context/NotificationContext';

export const notificationsMock: NotificationItem[] = [
  {
    id: '1',
    type: 'Request',
    content:
      '<b>Jan Nowak</b> from <b>MindPal</b> has requested a Mindocument for their project <b>Minddev</b>',
    isRead: false,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '2',
    type: 'Status change to on hold',
    content: 'We have launched new product!',
    isRead: false,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '3',
    type: 'New feature',
    content: 'New MindTool feature: AI Assistant',
    isRead: false,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '4',
    type: 'Request',
    content:
      '<b>Nickolas Stephans</b> from <b>MindPal</b> has requested a for their project <b>SFxGliwice</b>',
    isRead: true,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '5',
    type: 'Status change to on hold',
    content:
      '<b>Gregory Jones</b> from <b>MindPal</b> has requested a for their project <b>Project 123</b>',
    isRead: true,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '6',
    type: 'New feature',
    content:
      '<b>Lucy Gale</b> from <b>MindPal</b> has requested a Project Revision for their project <b>Gliwice</b>',
    isRead: true,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '7',
    type: 'Request',
    content:
      '<b>Jan Nowak</b> from <b>MindPal</b> has requested a Mindocument for their project <b>Minddev</b>',
    isRead: true,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '8',
    type: 'Status change to on hold',
    content: 'We have launched new product!',
    isRead: true,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
  {
    id: '9',
    type: 'New feature',
    content: 'New MindTool feature: AI Assistant',
    isRead: true,
    icon: 'https://www.svgrepo.com/show/532089/bell-alt.svg', // Add icon here
  },
];
