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
}));

export default function MultilineTextFields({quiz,setQuiz}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
    <div>
        <TextField
        id="filled-textarea"
        label="Click to start typing your question"
        multiline
        variant="filled"
        value={quiz && quiz.title ? quiz.title : ""}
        onChange={(e) => setQuiz("title", e.target.value)}
        />
        
    </div>
    
    </form>
  );
}
