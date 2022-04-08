import React, { useState, useEffect, Component } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState([{resposta: ''}, {resposta02: ''}]);

  useEffect(() => {
    callApi()
    .then(res => setResponse([{ resposta: res.name}, {resposta02: res.express}]))
    .catch(err => console.log(err));},
    [])

  async function callApi() {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
  }

  console.log(response);

  return (
    <div className="App">
      <header className="App-header">
        {response.map((response) => { 
          return (
            <>
            <h1>{response.resposta}</h1>
            <h1>{response.resposta02}</h1>
          </>
          );
        })}
      </header>
    </div>
  );
}

export default App;
