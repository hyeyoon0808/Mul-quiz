import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
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
    transition: "all 0.5s ease-in-out",
    fontWeight: "bold",
    "&:focus": {
      background: "#ff8080",
      color: "black",
    },
  },
  style2: {
    background: "#1273de",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    transition: "all 0.5s ease-in-out",
    "&:focus": {
      background: "#99b3ff",
      color: "black",
    },
  },
  style3: {
    background: "#e9ab01",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    transition: "all 0.5s ease-in-out",
    "&:focus": {
      background: "#ffe680",
      color: "black",
    },
  },
  style4: {
    background: "#049106",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    transition: "all 0.5s ease-in-out",
    "&:focus": {
      background: "#bfff80",
      color: "black",
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

export default function BasicTextFields({ quiz, setQuiz }) {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <div className={classes.styleCheck} style={styleCheck}>
        <Checkbox
          icon={
            <RadioButtonUncheckedIcon
              style={{ color: "white", fontSize: "30px" }}
            />
          }
          checkedIcon={
            <Brightness1Icon style={{ color: "white", fontSize: "30px" }} />
          }
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
          placeholder="Option1"
          //style={style1}
          value={quiz && quiz.select1 ? quiz.select1 : ""}
          onChange={(e) => setQuiz("select1", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck}>
        <Checkbox
          icon={<StarBorderIcon style={{ color: "white", fontSize: "32px" }} />}
          checkedIcon={
            <StarIcon style={{ color: "white", fontSize: "32px" }} />
          }
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
          placeholder="Option2"
          //style={style2}
          value={quiz && quiz.select2 ? quiz.select2 : ""}
          onChange={(e) => setQuiz("select2", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck}>
        <Checkbox
          icon={
            <FavoriteBorderIcon style={{ color: "white", fontSize: "30px" }} />
          }
          checkedIcon={
            <FavoriteIcon style={{ color: "white", fontSize: "30px" }} />
          }
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
          placeholder="Option3"
          value={quiz && quiz.select3 ? quiz.select3 : ""}
          onChange={(e) => setQuiz("select3", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className={classes.styleCheck}>
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
          placeholder="Option4"
          //style={style4}
          value={quiz && quiz.select4 ? quiz.select4 : ""}
          onChange={(e) => setQuiz("select4", e.target.value)}
          style={inputStyle}
        />
      </div>
    </form>
  );
}
