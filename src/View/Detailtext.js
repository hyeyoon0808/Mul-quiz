import React, { Component } from "react";
import { Form, TextArea } from "semantic-ui-react";

class Detailtext extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    return (
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Title"
          placeholder="Enter your quiz"
          value={quiz && quiz.title ? quiz.title : ""}
          onChange={(e) => setQuiz("title", e.target.value)}
        />
      </Form.Group>
    );
  }
}

export default Detailtext;
