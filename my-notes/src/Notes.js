import React from "react";
import "./Notes.css";
import { Button } from "@material-ui/core";
import Isotope from "isotope-layout";
// import $ from 'jquery';

function Notes(props) {
  
  return (
    <div className="note" id="notes">
      <div className="note_card grid">
        <div className="note_title">{props.title}</div>
        <div className="note_time">{props.date}</div>
        <hr />
        <div className="note_data">{props.note}</div>
        <hr />
        <Button variant="outlined" className="note_delete" >
            Delete Note
        </Button>
      </div>
    </div>
  );
}

export default Notes;
