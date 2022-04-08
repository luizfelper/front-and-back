import React, { useState, Component } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  function componentDidMount() {
    callApi()
    .then(res => setResponse({ response: res.express}))
    .catch(err => console.log(err));
  }
  componentDidMount();

  async function callApi() {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
  }

  return (
    <div className="App">
      <header className="App-header">
        {response.response}
      </header>
    </div>
  );
}

export default App;
