import React, { Component } from "react";
import { TextArea, Grid, GridRow, Form } from "semantic-ui-react";
import Checkbox from "@material-ui/core/Checkbox";
import { Switch, OutlinedInput, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserAns from "../Material/UserAns";

import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

class QuizstartAnswer extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    return <UserAns quiz={quiz} />;
  }
}

export default QuizstartAnswer;
