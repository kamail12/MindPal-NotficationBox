import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NotificationContext from '../context/NotificationContext';

const MessageContent = () => {
  const { id } = useParams();
  const { getMessageById } = useContext(NotificationContext);

  if (!id) return <div>Message not found</div>;
  const message = getMessageById(id);

  const messageClasses = {
    Request: 'bg-blue-100',
    'Status change to on hold': 'bg-yellow-100',
    'New feature': 'bg-green-100',
  };

  const messageClass = message ? messageClasses[message.type] : 'bg-white';

  return (
    <>
      {!message && <div>Message not found</div>}
      {message && (
        <div className={`p-4 ${messageClass}`}>
          <h1 className="text-2xl font-bold">Message Content:</h1>
          <p>
            Treść wiadomości o ID: <span className="font-bold">{id}</span>
          </p>
          <div dangerouslySetInnerHTML={{ __html: message.content }} />
        </div>
      )}
    </>
  );
};

export default MessageContent;
