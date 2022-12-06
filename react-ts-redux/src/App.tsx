import React from 'react';
import './App.scss';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
