import React, { useState } from 'react';
import InputComponent from '../UI/InputComponent';

const ChatComponent: React.FC = () => {
  const [response, setResponse] = useState('');

  const fetchData = async () => {
    const data = {
      content: 'tell me something funny.',
    };

    try {
      const response = await fetch('http://localhost:9000/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResponse(responseData.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <InputComponent value='' onChange={setResponse}/>
      <button onClick={fetchData}>Fetch Data</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default ChatComponent;
