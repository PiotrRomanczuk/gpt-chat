import './App.css'
import { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [inputValue, setInputValue] = useState('');

  const [response, setResponse] = useState('');

  const handleButtonClick = () => {

    // get the input value
    
    // make an async function call to the API

    // update the state with the response from the API


  };
  



      // fetch('/api/endpoint', {
      //   method: 'POST',
      //   body: JSON.stringify({ data: inputValue }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
  
      //     console.log(data);
      //   })
      //   .catch((error) => {
  
      //     console.error(error);
      //   });

  
  return (
    <div>
      <Input value={inputValue} onChange={setInputValue} />
      <Button onClick={handleButtonClick} />
    </div>
  );
}


export default App
