import React, { Component } from "react";
import Detailanswer from "../View/Detailanswer";
import { inject, observer } from "mobx-react";

@inject("QuizStore")
@observer
class DetailanswerContainer extends Component {
  setQuiz = (name, value) => {
    const quiz=this.props.QuizStore.getselectquiz;
    this.props.QuizStore.setQuizProps(name, value, quiz);
  };

  setCheck = (e) => {
    this.props.QuizStore.setCheckedProps(e);
  };

  render() {
    const quiz = this.props.QuizStore.getselectquiz;
    return (
      <div>
        <Detailanswer quiz={quiz} setQuiz={this.setQuiz} />
      </div>
    );
  }
}

export default DetailanswerContainer;
