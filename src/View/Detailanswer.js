import React, { Component } from "react";

import Ans from "../Material/Ans";

class QuizstartAnswer extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    return <Ans quiz={quiz} setQuiz={setQuiz} />;
  }
}

export default QuizstartAnswer;
