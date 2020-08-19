import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import { Button } from "semantic-ui-react";
import IconButton from '@material-ui/core/IconButton';

const MapList = styled.div`
  box-shadow: 0px 0px 4px #b3b3b3;
  height: 100%;
  overflow: scroll;
  .center {
    height:100px;
    display: block;
    margin: 0 auto;
  }
`;

const back = {
    background:"gart",
}
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign:'center',

  },
  wrap:{
    border: 'dotted black 2px',
    background:'#ffeeff',
    padding:'10px',
  },
  btn:{
      display:'none',
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Import kahoot from spreadsheet</h2>
      <div className={classes.wrap}>
          <p>1. Download our template</p>
          <p>2. Fill out and save as.xlsx</p>
          <p>3. Drag and drop it here</p> 
          <p><hr></hr>or<hr></hr></p>
        <input className={classes.btn}
        accept="image/*"
        multiple
        type="file"
        />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Select File
        </Button>
      </label>
          <p>Max file size: 1 MB </p>
      </div>
      <p>Export .xlsx files from</p>
      <h4>MS Excel,Libre Offifce,Google Spreadsheets and Numbers</h4>
      <Button variant="contained" onClick={handleClose}>Cancle</Button>
      <Button variant="contained" onClick={handleClose}> Upload</Button>
      
    </div>
  );

  return (
    <>
      <Button type="button" onClick={handleOpen}
      variant="contained"
      primary
      disableElevation
      className={"center"}
      >
        <p>Import</p> spreadsheet
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
