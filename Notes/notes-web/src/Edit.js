import React from 'react';
import $ from 'jquery';
import Button from '@material-ui/core/Button';
import "./Edit.css";
import Popup from "./Popup.js";


function Edit(props) {
    var addModeVid = false;

    $('.circle_vid').click(function () {
        addModeVid = ~addModeVid;
        $('#addSign_vid').css({
            transform: addModeVid ? 'rotate(360deg)' : 'rotate(0deg)'
        })
    });
        return (
            <div className="edit_button">
                <div id="addBtn_vid" className="addBtn_wrapper_vid">
                    <Button onClick={props.handleClickOpen} className="circle_vid">
                        <img id="addSign_vid"
                            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png"
                            alt="" />
                    </Button>
                </div>
            </div>
        )
    };

    export default Edit;
