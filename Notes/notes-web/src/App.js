import React from 'react';
import './App.css';
import Header from './Header.js';
import Notes from './Card.js';
import Edit from './Edit.js';

function App() {
  return (
    <div className="Notes">
      {/* navbar */}
      <Header />
      <div className="notes_Card">
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
      <Edit />
      {/* Notes card */}
      {/* add notes button */}
    </div>
  );
}

export default App;
