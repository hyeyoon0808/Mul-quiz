import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Quizstart from "../View/Quizstart";

@inject("QuizStore")
@observer
class QuizStartContainer extends Component {
  // handleAlert = (e) => {
  //   this.props.QuizStore.setCheckedProps(e);
  //   e.check1 == true ? alert("정답") : {};
  // };

  render() {
    const quiz = this.props.QuizStore.getselectquiz;

    return (
      <div>
        <Quizstart quiz={quiz} />
      </div>
    );
  }
}

export default QuizStartContainer;
