import React, { Component } from "react";
import { TextArea, Grid, GridRow, Form } from "semantic-ui-react";
import Checkbox from "@material-ui/core/Checkbox";
import { Switch, OutlinedInput, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Ans from "../Material/Ans";

class QuizstartAnswer extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    return <Ans quiz={quiz} setQuiz={setQuiz} />;
  }
}

export default QuizstartAnswer;
