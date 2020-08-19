import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      overflow: "hidden",
      margin: theme.spacing(1),
      width: "100%",
      float: "center",
      height: "50px",
      display: "flex",
    },
  },
  styleCheck: {
    float: "left",
    width: "50%",
    position: "relative",
    border: "none",
    height: "90px",
    fontSize: "20px",
    padding: "5px",
  },
  style1: {
    background: "red",
    borderRadius: "10px",
  },
  style2: {
    background: "blue",
    borderRadius: "10px",
  },
  style3: {
    background: "yellow",
    borderRadius: "10px",
  },
  style4: {
    background: "green",
    borderRadius: "10px",
  },
}));
const inputStyle = {
  width: "100%",
  height: "100%",
  border: "none",
  paddingLeft: "20px",
};
const checkStyle = {
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: 1,
};
const styleCheck = {
  borderRadius: "10px",
};

export default function BasicTextFields({ quiz, setQuiz }) {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <div className={classes.styleCheck} style={styleCheck}>
        <Checkbox
          checked={quiz && quiz.check1 ? true : false}
          onChange={(event) => setQuiz("check1", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
          style={checkStyle}
        />
        <input
          type="text"
          className={classes.style1}
          id="outlined-basic"
          label="Option1"
          placeholder="Tell us more"
          //style={style1}
          value={quiz && quiz.select1 ? quiz.select1 : ""}
          onChange={(e) => setQuiz("select1", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck}>
        <Checkbox
          checked={quiz && quiz.check2 ? true : false}
          onChange={(event) => setQuiz("check2", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
          style={checkStyle}
        />
        <input
          type="text"
          className={classes.style2}
          id="outlined-basic"
          label="Option2"
          placeholder="Tell us more"
          //style={style2}
          value={quiz && quiz.select2 ? quiz.select2 : ""}
          onChange={(e) => setQuiz("select2", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck}>
        <Checkbox
          checked={quiz.check3}
          onChange={(event) => setQuiz("check3", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
          style={checkStyle}
        />
        <input
          type="text"
          className={classes.style3}
          id="outlined-basic"
          label="Option3"
          placeholder="Tell us more"
          value={quiz && quiz.select3 ? quiz.select3 : ""}
          onChange={(e) => setQuiz("select3", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck}>
        <Checkbox
          checked={quiz.check4}
          onChange={(event) => setQuiz("check4", event.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
          style={checkStyle}
        />
        <input
          type="text"
          className={classes.style4}
          id="outlined-basic"
          label="Option4"
          placeholder="Tell us more"
          //style={style4}
          value={quiz && quiz.select4 ? quiz.select4 : ""}
          onChange={(e) => setQuiz("select4", e.target.value)}
          style={inputStyle}
        />
      </div>
    </form>
  );
}
