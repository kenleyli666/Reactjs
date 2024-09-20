import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [serverUrl, roomId]);

    /**
     * check serverUrl || roomId
     * is updated then run the callback 
     */
    // }, [serverUrl, roomId]);

    /**
     * check serverUrl
     * is updated then run the callback 
     */
    // }, [serverUrl]);


    /**
     * run only 1 time
     */
    // }, []);


    /**
     * run everytime when the component rendering/re-rendering
     */
    // });
  useEffect(() => {
    console.log('[depency on variable update] useEffect with dependcy');
    // const connection = createConnection(serverUrl, roomId);
    // connection.connect();
    // return () => {
    //   connection.disconnect();
    // };
    
    return () => {
        console.log('clean up')
    };
  }, [roomId, serverUrl]);

  useEffect(() => {
    console.log('[1 time only] useEffect with empty dependcy');
  }, []);
  
  useEffect(() => {
    console.log('[every time when re-rendering] useEffect without array');
  });

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
