import React, { Component } from "react";
import { TextArea, Grid, GridRow, Form } from "semantic-ui-react";
import Checkbox from "@material-ui/core/Checkbox";
import { Switch, OutlinedInput, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

class QuizstartAnswer extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    return (
      <Form.Field>
        <TextArea
          placeholder="Tell us more"
          value={quiz && quiz.select1 ? quiz.select1 : ""}
          onChange={(e) => setQuiz("select1", e.target.value)}
        />
        <TextArea
          placeholder="Tell us more"
          value={quiz && quiz.select2 ? quiz.select2 : ""}
          onChange={(e) => setQuiz("select2", e.target.value)}
        />
        {/* <TextArea
          placeholder="Tell us more"
          value={quiz && quiz.select3 ? quiz.select3 : ""}
          onChange={(e) => setQuiz("select3", e.target.value)}
        />
        <TextArea
          placeholder="Tell us more"
          value={quiz && quiz.select4 ? quiz.select4 : ""}
          onChange={(e) => setQuiz("select4", e.target.value)}
        /> */}
      </Form.Field>
    );
  }
}

export default QuizstartAnswer;
