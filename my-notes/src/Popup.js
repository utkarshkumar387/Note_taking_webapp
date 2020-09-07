import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import "./Popup.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Popup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="popup">
      <div className="popup_Button">
        <div id="addBtn" class="addBtn_wrapper">
          <Button
            data-toggle="modal"
            data-target="#courseModal"
            class="circle"
            onClick={handleClickOpen}
          >
            <img
              id="addSign"
              src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png"
              alt=""
            />
          </Button>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add a Note"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            To add new note enter below details!!
            <TextField
              autoFocus
              margin="dense"
              id="addTitle"
              label="Enter title of your note..."
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="addNote"
              label="Enter your note..."
              type="text"
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" id="addBtn">
            Add note
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Popup;
