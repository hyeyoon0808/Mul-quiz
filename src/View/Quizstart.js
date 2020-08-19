import React, { Component } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import UserAns from "../Material/UserAns";

const styleHeader = {
  width: "100%",
  height: "80px",
};

const styleImage = {
  width: "500px",
  height: "350px",
  paddingLeft: "300px",
};

class Quizstart extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    return (
      <div>
        <Segment style={styleHeader}>
          <Header as="h1" textAlign="center">
            {quiz.title}
          </Header>
        </Segment>

        <div>
          <Image src={quiz.imgUrl} style={styleImage} />
        </div>
        <div>
          <UserAns quiz={quiz} setQuiz={setQuiz} />
        </div>
      </div>
    );
  }
}

export default Quizstart;
