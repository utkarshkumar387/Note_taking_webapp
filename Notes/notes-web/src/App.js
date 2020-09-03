import React from 'react';
import './App.css';
import Header from './Header.js'
import Notes from './Card.js'

function App() {
  return (
    <div className="Notes">
      {/* navbar */}
      <Header />
      <Notes />
      {/* Notes card */}
      {/* add notes button */}
    </div>
  );
}

export default App;
