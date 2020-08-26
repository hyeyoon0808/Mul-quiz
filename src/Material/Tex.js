import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  text: {
    '& .MuiInputBase-root': {
      height: '120px',
      fontSize: '2em',
      textAlign: 'center',
      borderRadius:"20px",
      fontWeight:"bold",
      color:"#555"
    },
    '& .MuiInputBase-input': {
      
      textAlign: 'center'
    },
    '& .MuiFormLabel-root': {
      
      textAlign: 'center'
    },
  },
}));

export default function MultilineTextFields({quiz,setQuiz}) {
  const classes = useStyles();
 
  return (
    <form className={classes.root} noValidate autoComplete="off">
      
    <div>
        <TextField
        
        className={classes.text}
        id="filled-textarea"
        label={quiz && quiz.title ? "" : "Click to start typing your question"} 
        value={quiz && quiz.title ? quiz.title : ""}
        onChange={(e) => setQuiz("title", e.target.value)}
        variant="outlined"
        />
        
    </div>
    
    </form>
  );
}
