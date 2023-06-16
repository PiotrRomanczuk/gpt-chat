import React, { useState } from 'react';
import InputComponent from '../UI/InputComponent';

const ChatComponent = () => {
  const [response, setResponse] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const fetchData = async () => {
    const data = {
      content: inputValue,
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
      <InputComponent value={inputValue} onChange={handleInputChange} />
      <button onClick={fetchData}>Fetch Data</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default ChatComponent;
