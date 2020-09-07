import React from 'react';
import Header from './Header.js';
import Notes from './Notes.js';
import { Container } from '@material-ui/core';
import './App.css';
import Data from './cData.js';
import Popup from './Popup.js'
// import Isotope from "isotope-layout";
import IsoTopeGrid from "react-isotope";

function App() {
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
            <Popup />
        </div>
    )
}

export default App;
