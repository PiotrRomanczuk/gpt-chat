import './App.css'
import { useState } from 'react';

import Input from './components/UI/InputComponent';
import Button from './components/UI/ButtonComponent';
import ChatComponent from './components/Logic/ChatComponent';

function App() {
  const [inputValue, setInputValue] = useState('');

  const [response, setResponse] = useState('');

  const handleButtonClick = () => {  };
  
  
  return (
    <div>
      {/* <Input value={inputValue} onChange={setInputValue} /> */}
      {/* <Button onClick={handleButtonClick} title={ "Fetch"} /> */}
      <ChatComponent />
    </div>
  );
}


export default App
