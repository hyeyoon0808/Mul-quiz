import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Ans from "./Ans";

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
  const [checked, setChecked] = React.useState(false);
  //   const [checked1, setChecked1] = React.useState(false);
  //   const [checked2, setChecked2] = React.useState(false);
  //   const [checked3, setChecked3] = React.useState(false);
  //   const [checked4, setChecked4] = React.useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  //   const handleChange = (e) => {
  //     setChecked1(e.target.checked1);
  //     setChecked2(e.target.checked2);
  //     setChecked3(e.target.checked3);
  //     setChecked4(e.target.checked4);
  //   };

  //   const handleChange2 = (e) => {
  //     setChecked2(e.target.checked2);
  //   };
  //   const handleChange3 = (e) => {
  //     setChecked3(e.target.checked3);
  //   };
  //   const handleChange4 = (e) => {
  //     setChecked4(e.target.checked4);
  //   };

  //   const handleCorrect = () => {
  //     setChecked1 && quiz.check1
  //       ? setChecked2 && quiz.check2
  //         ? setChecked3 && quiz.check3
  //           ? setChecked4 && quiz.check4
  //             ? alert("정답입니다.")
  //             : alert("정답이 아닙니다.")
  //           : alert("정답이 아닙니다.")
  //         : alert("정답이 아닙니다.")
  //       : alert("정답이 아닙니다.");
  //   };

  const handleAlert1 = () => {
    setChecked && quiz.check1
      ? alert("정답입니다.")
      : alert("정답이 아닙니다.");
  };

  const handleAlert2 = () => {
    setChecked && quiz.check2
      ? alert("정답입니다.")
      : alert("정답이 아닙니다.");
  };

  const handleAlert3 = () => {
    setChecked && quiz.check3
      ? alert("정답입니다.")
      : alert("정답이 아닙니다.");
  };

  const handleAlert4 = () => {
    setChecked && quiz.check4
      ? alert("정답입니다.")
      : alert("정답이 아닙니다.");
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          //onChange={handleAlert1}
          //checked={quiz.check1}
          //onChange={(event) => setQuiz("check1", event.target.checked)}
        />
        <TextField
          className={classes.style1}
          id="outlined-basic"
          //label="Outlined"
          variant="outlined"
          //placeholder="Tell us more"
          value={quiz && quiz.select1 ? quiz.select1 : ""}
          //onChange={(e) => setQuiz("select1", e.target.value)}
        />
      </div>
      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          //onChange={handleAlert2}
          //checked={quiz.check2}
          //onChange={(event) => setQuiz("check2", event.target.checked)}
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
          checked={checked}
          onChange={handleChange}
          //onChange={handleAlert3}
          //checked={quiz.check3}
          //onChange={(event) => setQuiz("check3", event.target.checked)}
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
          checked={checked}
          onChange={handleChange}
          //onChange={handleAlert4}
          //checked={quiz.check4}
          //onChange={(event) => setQuiz("check4", event.target.checked)}
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

      <div>
        {/* <Button variant="contained" color="secondary" onClick={handleCorrect}> */}
        {/* Save
        </Button> */}
      </div>
    </form>
  );
}
