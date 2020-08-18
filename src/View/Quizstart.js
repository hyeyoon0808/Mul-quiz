import React, { Component } from "react";
import {
  Checkbox,
  Header,
  Grid,
  TextArea,
  Button,
  Image,
} from "semantic-ui-react";
import UserAns from "../Material/UserAns";

class Quizstart extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    return (
      // <div>
      //   <p>{quiz.title}</p>
      //   <p>{quiz.select1}</p>
      //   <p>{quiz.select2}</p>
      //   <p>{quiz.select3}</p>
      //   <p>{quiz.select4}</p>
      // </div>

      <Grid>
        <Grid.Row>
          <Header as="h2">
            Question
            <Header.Subheader>Let's solve the questions!</Header.Subheader>
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Header as="h3" dividing>
            {quiz.title}
          </Header>
        </Grid.Row>

        <Grid.Row>
          <Header as="h2">Image</Header>
        </Grid.Row>
        <Grid.Row>
          <Image src={quiz.imgUrl} />
        </Grid.Row>

        <Grid.Row>
          <Header as="h2">Answer</Header>
        </Grid.Row>
        <Grid.Row>
          <UserAns quiz={quiz} setQuiz={setQuiz} />
        </Grid.Row>

        {/* <Grid.Row>
          <TextArea placeholder="empty" value={quiz.select1} />
          <Checkbox label="111"/>
          <TextArea placeholder="empty" value={quiz.select2} />
          <Checkbox label="222" />
        </Grid.Row>
        <Grid.Row>
          <TextArea placeholder="empty" value={quiz.select3} />
          <Checkbox label="333" />
          <TextArea placeholder="empty" value={quiz.select4} />
          <Checkbox label="444" />
        </Grid.Row>

        <Grid.Row>
          <Button onClick={handleAlert}>Save</Button>
        </Grid.Row> */}
      </Grid>
    );
  }
}

export default Quizstart;
