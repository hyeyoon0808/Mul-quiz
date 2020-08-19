import React, { Component } from "react";
import Detailinput from "../View/Detailinput";
import { inject, observer } from "mobx-react";

@inject("QuizStore")
@observer
class DetailinputContainer extends Component {
  setQuiz = (name, value) => {
    this.props.QuizStore.setQuizProps(name, value);
  };
  setFileInput = (name, value) => {
    this.props.QuizStore.setQuiz(name, value);
  };
  
  render() {
    const quiz = this.props.QuizStore.getselectquiz;
    const getPost = this.props.QuizStore.getPostProps;
    return (
      <div>
        <Detailinput
          quiz={quiz}
          setQuiz={this.setQuiz}
          setFileInput={this.setFileInput}
          getPost={getPost}
        />
      </div>
    );
  }
}

export default DetailinputContainer;
