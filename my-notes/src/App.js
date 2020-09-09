import React, { useState } from 'react';
import Header from './Header.js';
import Notes from './Notes.js';
import { Container } from '@material-ui/core';
import './App.css';
import Data from './cData.js';
import Popup from './Popup.js'
// import Isotope from "isotope-layout";
import IsoTopeGrid from "react-isotope";

function App() {
    const[addItem, setAddItem] = useState();

    const addNote = (note) => {
        // alert("Clicked");
        setAddItem((prevData) => {
            return [...prevData, note];
        })
    }
    return (
        <div className="Notes">
            <Header />
            <Container className="notes_Container">
            {Data.map((val) => {
               return <Notes 
                    dpLetter= {val.dpLetter}
                    title= {val.title}
                    date= {val.date}
                    note= {val.note}
                />
            })}
            </Container>
            <Popup passNote={addNote} />
        </div>
    )
}

export default App;
