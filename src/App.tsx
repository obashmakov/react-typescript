import React from 'react';
import { NavBar } from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Test</h1>
      </div>
    </>
  );
}

export default App;
