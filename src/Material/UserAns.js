import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

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
    height: "120px",
    fontSize: "20px",
    padding: "5px",
  },
  style1: {
    background: "#e0102f",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    "&:focus": {
      outline: "none",
      transform: "scale(1.04)",
    },
  },
  style2: {
    background: "#1273de",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    "&:focus": {
      outline: "none",
      transform: "scale(1.04)",
    },
  },
  style3: {
    background: "#e9ab01",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    "&:focus": {
      outline: "none",
      transform: "scale(1.04)",
    },
  },
  style4: {
    background: "#049106",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    "&:focus": {
      outline: "none",
      transform: "scale(1.04)",
    },
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
  color: "white",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const styleCheck = {
  borderRadius: "10px",
};
const saveBtn = {
  position: "absolute",
  bottom: "32%",
  right: "2%",
  width: "200px",
  height: "50px",
  fontSize: "18px",
};

export default function Checkboxes({
  quiz,
  onTotalScore,
  totalScore,
  onNextQuiz,
  nextQuiz,
}) {
  const classes = useStyles();
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);

  const [check1, setCheck1] = React.useState(
    checked1 === quiz.check1 ? true : false
  );
  const [check2, setCheck2] = React.useState(
    checked2 === quiz.check2 ? true : false
  );
  const [check3, setCheck3] = React.useState(
    checked3 === quiz.check3 ? true : false
  );
  const [check4, setCheck4] = React.useState(
    checked4 === quiz.check4 ? true : false
  );

  const btnclick1 = (value) => {
    setChecked1(!value);
    !value === quiz.check1 ? setCheck1(true) : setCheck1(false);
  };
  const btnclick2 = (value) => {
    setChecked2(!value);
    !value === quiz.check2 ? setCheck2(true) : setCheck2(false);
  };
  const btnclick3 = (value) => {
    setChecked3(!value);
    !value === quiz.check3 ? setCheck3(true) : setCheck3(false);
  };
  const btnclick4 = (value) => {
    setChecked4(!value);
    !value === quiz.check4 ? setCheck4(true) : setCheck4(false);
  };

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
  const falseChecked = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);

    onNextQuiz(quiz);

    // console.log("ans");
    // console.log("checked1 : " + checked1);
    // console.log("Quiz.checked1 : " + quiz.check1);
    // console.log("check1 : " + check1);
    // console.log("checked2 : " + checked2);
    // console.log("Quiz.checked2 : " + quiz.check2);
    // console.log("check2 : " + check2);
    // console.log("checked3 : " + checked3);
    // console.log("Quiz.checked3 : " + quiz.check3);
    // console.log("check3 : " + check3);
    // console.log("checked4 : " + checked4);
    // console.log("Quiz.checked4 : " + quiz.check4);
    // console.log("check4 : " + check4);
  };

  React.useEffect(() => {
    checked1 === quiz.check1 ? setCheck1(true) : setCheck1(false);
    checked2 === quiz.check2 ? setCheck2(true) : setCheck2(false);
    checked3 === quiz.check3 ? setCheck3(true) : setCheck3(false);
    checked4 === quiz.check4 ? setCheck4(true) : setCheck4(false);
  });

  const handleCorrect = () => {
    totalScore = 0;
    check1 && true
      ? check2 && true
        ? check3 && true
          ? check4 && true
            ? alert("정답입니다 :>")
            : alert("오답입니다 :<")
          : alert("오답입니다 :<")
        : alert("오답입니다 :<")
      : alert("오답입니다 :<");
    //점수 증가
    check1 && true
      ? check2 && true
        ? check3 && true
          ? check4 && true
            ? (totalScore += 40)
            : (totalScore += 0)
          : (totalScore += 0)
        : (totalScore += 0)
      : (totalScore += 0);
    onTotalScore(totalScore);

    //checkBox 초기화

    // check1 && true
    //   ? check2 && true
    //     ? check3 && true
    //       ? check4 && true
    //         ? onNextQuiz(quiz)
    //         : (totalScore += 0)
    //       : (totalScore += 0)
    //     : (totalScore += 0)
    //   : (totalScore += 0);

    check1 && true
      ? check2 && true
        ? check3 && true
          ? check4 && true
            ? falseChecked()
            : (totalScore += 0)
          : (totalScore += 0)
        : (totalScore += 0)
      : (totalScore += 0);
  };

  return (
    <form noValidate autoComplete="off">
      <div className={classes.styleCheck} style={styleCheck}>
        {}
        <Checkbox
          icon={
            <RadioButtonUncheckedIcon
              style={{ color: "white", fontSize: "30px" }}
            />
          }
          checkedIcon={
            <Brightness1Icon style={{ color: "white", fontSize: "30px" }} />
          }
          checked={checked1}
          onChange={handleChange1}
          name="checked1"
          style={checkStyle}
        />
        <input
          className={classes.style1}
          onClick={() => btnclick1(checked1)}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select1 ? quiz.select1 : ""}
          readOnly
          onfocus="this.blur()"
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck} style={styleCheck}>
        <Checkbox
          icon={<StarBorderIcon style={{ color: "white", fontSize: "32px" }} />}
          checkedIcon={
            <StarIcon style={{ color: "white", fontSize: "32px" }} />
          }
          checked={checked2}
          onChange={handleChange2}
          name="checked2"
          style={checkStyle}
        />
        <input
          className={classes.style2}
          onClick={() => btnclick2(checked2)}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select2 ? quiz.select2 : ""}
          readOnly
          onfocus="this.blur()"
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck} style={styleCheck}>
        <Checkbox
          icon={
            <FavoriteBorderIcon style={{ color: "white", fontSize: "30px" }} />
          }
          checkedIcon={
            <FavoriteIcon style={{ color: "white", fontSize: "30px" }} />
          }
          checked={checked3}
          onChange={handleChange3}
          name="checked3"
          style={checkStyle}
        />
        <input
          className={classes.style3}
          onClick={() => btnclick3(checked3)}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select3 ? quiz.select3 : ""}
          readOnly
          onfocus="this.blur()"
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck} style={styleCheck}>
        <Checkbox
          icon={
            <CheckBoxOutlineBlankIcon
              style={{ color: "white", fontSize: "30px" }}
            />
          }
          checkedIcon={
            <IndeterminateCheckBoxIcon
              style={{ color: "white", fontSize: "30px" }}
            />
          }
          checked={checked4}
          onChange={handleChange4}
          name="checked4"
          style={checkStyle}
        />
        <input
          className={classes.style4}
          onClick={() => btnclick4(checked4)}
          id="outlined-basic"
          variant="outlined"
          value={quiz && quiz.select4 ? quiz.select4 : ""}
          readOnly
          onfocus="this.blur()"
          style={inputStyle}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleCorrect();
          }}
          style={saveBtn}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
