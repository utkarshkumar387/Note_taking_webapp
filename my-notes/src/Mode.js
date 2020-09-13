import React from "react";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import './Mode.css';

function Mode() {
  return (
    <div className="mode">
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Normal"
        />
      </FormGroup>
    </div>
  );
}

export default Mode;
