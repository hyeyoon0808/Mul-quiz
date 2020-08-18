import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const form = styled.div`
  .ListItem {
    width: 100%;
    height: auto;
    padding: 10px;
    font-size: 10px;
  }
  .checked {
    box-shadow: 0px 0px 10px #afafaf;
    background: rgb(234, 244, 252);
  }
  &:hover {
    background: #f2f2f2;
  }
  svg {
    font-size: 20px;
    cursor: pointer;
    color: #58e2b6;
    &:hover {
      color: #ff7b7c;
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  style1: {
    background: "red",
  },
  style2: {
    background: "blue",
  },
  style3: {
    background: "yellow",
  },
  style4: {
    background: "green",
  },
}));

export default function BasicTextFields({ quiz, setQuiz }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Checkbox
          checked={quiz.check1}
          onChange={(event) => setQuiz("check1", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <TextField
          className={classes.style1}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Tell us more"
          //style={style1}
          value={quiz && quiz.select1 ? quiz.select1 : ""}
          onChange={(e) => setQuiz("select1", e.target.value)}
        />
      </div>
      <div>
        <Checkbox
          checked={quiz.check2}
          onChange={(event) => setQuiz("check2", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <TextField
          className={classes.style2}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Tell us more"
          //style={style2}
          value={quiz && quiz.select2 ? quiz.select2 : ""}
          onChange={(e) => setQuiz("select2", e.target.value)}
        />
      </div>
      <div>
        <Checkbox
          checked={quiz.check3}
          onChange={(event) => setQuiz("check3", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <TextField
          className={classes.style3}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Tell us more"
          //style={style3}
          value={quiz && quiz.select3 ? quiz.select3 : ""}
          onChange={(e) => setQuiz("select3", e.target.value)}
        />
      </div>
      <div>
        <Checkbox
          checked={quiz.check4}
          onChange={(event) => setQuiz("check4", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <TextField
          className={classes.style4}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Tell us more"
          //style={style4}
          value={quiz && quiz.select4 ? quiz.select4 : ""}
          onChange={(e) => setQuiz("select4", e.target.value)}
        />
      </div>
    </form>
  );
}
