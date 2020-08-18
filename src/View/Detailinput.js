import React, { Component } from "react";
import { Grid, Divider, Button, Select, Form } from "semantic-ui-react";
import Sel from "../Material/Sel";
import Point from "../Material/Point";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

class Detailinput extends Component {
  render() {
    const { quiz, setQuiz, setImage } = this.props;

    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <Point />

          <Divider />

          <Form.Input
            label={quiz && quiz.Time ? `Time: ${quiz.Time}초 ` : `Time: 5초 `}
            min={5}
            max={30}
            onChange={(e) => setQuiz("Time", e.target.value)}
            step={1}
            type="range"
            value={quiz && quiz.Time ? quiz.Time : 5}
          />

          <Divider />

          <p> Answer Option</p>
          <Sel quiz={quiz} />
        </Grid.Column>

        <Grid.Column>
          <Form>
            <Form.Input
              type="file"
              name="imgFile"
              id="imgFile"
              onChange={(e) => setQuiz("imgUrl", e.target.value)}
            />
            <Divider />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Detailinput;
