import React, { Component } from "react";
import { TextArea, Grid, GridRow,} from "semantic-ui-react";

class Detailanswer extends Component {
  render() {
    const style1 = {
      background: "red",
    };
    const style2 = {
      background: "blue",
    };
    const style3 = {
      background: "yellow",
    };
    const style4 = {
      background: "green",
    };
    const { quiz, setQuiz } = this.props;

    return (
      <Grid columns={2} divided>
        <GridRow>
          <Grid.Column>
            <TextArea
              placeholder="Tell us more"
              style={style1}
              value={quiz && quiz.select1 ? quiz.select1 : ""}
              onChange={(e) => setQuiz("select1", e.target.value)}
            />

            <input
              class="form-check-input"
              type="checkbox"
              name="checkbox"
              value={quiz.check1}
              checked={quiz && quiz.check1 ? true : false}
              onChange={(e) => setQuiz("check1", true)}
            />
          </Grid.Column>
          <Grid.Column>
            <TextArea
              placeholder="Tell us more"
              style={style2}
              value={quiz && quiz.select2 ? quiz.select2 : ""}
              onChange={(e) => setQuiz("select2", e.target.value)}
            />
            <input
              type="checkbox"
              name="checkbox"
              value={quiz.check2}
              checked={quiz.check2}
              onChange={(e) => setQuiz("check2", true)}
            />
          </Grid.Column>
        </GridRow>

        <GridRow>
          <Grid.Column>
            <TextArea
              placeholder="Tell us more"
              style={style3}
              value={quiz && quiz.select3 ? quiz.select3 : ""}
              onChange={(e) => setQuiz("select3", e.target.value)}
            />
            <input
              type="checkbox"
              name="checkbox"
              value={quiz.check3}
              checked={quiz.check3}
              onChange={(e) => setQuiz("check3", true)}
            />
          </Grid.Column>
          <Grid.Column>
            <TextArea
              placeholder="Tell us more"
              style={style4}
              value={quiz && quiz.select4 ? quiz.select4 : ""}
              onChange={(e) => setQuiz("select4", e.target.value)}
            />
            <input
              type="checkbox"
              name="checkbox"
              value={quiz.check4}
              checked={quiz.check4}
              onChange={(e) => setQuiz("check4", true)}
            />
          </Grid.Column>
        </GridRow>
      </Grid>
    );
  }
}

export default Detailanswer;
