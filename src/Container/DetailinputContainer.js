import React, { Component } from "react";
import Detailinput from "../View/Detailinput";
import { inject, observer } from "mobx-react";

@inject("QuizStore")
@observer
class DetailinputContainer extends Component {
  setQuiz = (name, value) => {
    this.props.QuizStore.setQuizProps(name, value);
  };
  setImage = (name, value) => {
    this.props.QuizStore.setImageProps(name, value);
  };
  
  render() {
    const quiz = this.props.QuizStore.getselectquiz;
    const quizs = this.props.QuizStore.getquizs;
    return (
      <div>
        <Detailinput
          quiz={quiz}
          setQuiz={this.setQuiz}
          setImage={this.setImage}
          quizs={quizs}
        />
      </div>
    );
  }
}

export default DetailinputContainer;
