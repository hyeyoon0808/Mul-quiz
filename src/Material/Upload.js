import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


export default function UploadButtons() {
  const classes = useStyles();
  const [file,setFile] = React.useState("");
  const [previewURL,setpreviewURL] = React.useState("");

  let profile_preview = null;
    if (file !== "") {
      profile_preview = (
        <img
          className="profile_preview"
          src={previewURL}
          alt="profile"
          width="400px"
        />
      );
      console.log('aa');
    }
    

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setpreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };


  return (
    <div className={classes.root}>
      
      <div className={"profileBox"}>
          {profile_preview} 
      </div>
      <Button>Image Library</Button>

      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFileOnChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload image
        </Button>
      </label>

      <Button>Youtube Link</Button>
    </div>
  );
}
