import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
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

export default function Checkboxes({ quiz }) {
  const classes = useStyles();
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);

  const [check1, setCheck1] = React.useState(true);
  const [check2, setCheck2] = React.useState(true);
  const [check3, setCheck3] = React.useState(true);
  const [check4, setCheck4] = React.useState(true);

  const handleChange1 = (e) => {
    setChecked1(e.target.checked);
    e.target.checked === quiz.check1 ? setCheck1(true) : setCheck1(false);
  };
  const handleChange2 = (e) => {
    setChecked2(e.target.checked);
    e.target.checked === quiz.check2 ? setCheck2(true) : setCheck2(false);
  };
  const handleChange3 = (e) => {
    setChecked3(e.target.checked);
    e.target.checked === quiz.check3 ? setCheck3(true) : setCheck3(false);
  };
  const handleChange4 = (e) => {
    setChecked4(e.target.checked);
    e.target.checked === quiz.check4 ? setCheck4(true) : setCheck4(false);
  };

  const handleCorrect = () => {
    check1 && true
      ? check2 && true
        ? check3 && true
          ? check4 && true
            ? alert("정답입니다 :)")
            : alert("오답입니다 :<")
          : alert("오답입니다 :<")
        : alert("오답입니다 :<")
      : alert("오답입니다 :<");
  };

  return (
    <form>
      <div>
        <Checkbox checked={checked1} onChange={handleChange1} name="checked1" />
        <TextField
          className={classes.style1}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select1 ? quiz.select1 : ""}
        />
      </div>

      <div>
        <Checkbox checked={checked2} onChange={handleChange2} name="checked2" />
        <TextField
          className={classes.style2}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select2 ? quiz.select2 : ""}
        />
      </div>

      <div>
        <Checkbox checked={checked3} onChange={handleChange3} name="checked3" />
        <TextField
          className={classes.style3}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select3 ? quiz.select3 : ""}
        />
      </div>

      <div>
        <Checkbox checked={checked4} onChange={handleChange4} name="checked4" />
        <TextField
          className={classes.style4}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select4 ? quiz.select4 : ""}
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={handleCorrect}>
          Save
        </Button>
      </div>
    </form>
  );
}
