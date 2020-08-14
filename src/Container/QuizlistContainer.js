import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import Quizlist from "../View/Quizlist"


@inject("QuizStore")
@observer
class QuizlistContainer extends Component {

    onRemove = () => {
        const ISBN=this.props.QuizStore.selectquiz.ISBN;
        this.props.QuizStore.Remove(ISBN)
    }

    onSelect=(quiz)=>{
        this.props.QuizStore.selectQuiz(quiz);
    }

    onAddQuiz = () =>{
        let quiz = this.props.QuizStore.getselectquiz;
        quiz = {...quiz};
        this.props.QuizStore.addQuiz(quiz);
    }

    render() {
        let quizs = this.props.QuizStore.getquizs;
        return (
            <Quizlist  
                quizs={quizs} 
                onRemove={this.onRemove} 
                onSelect={this.onSelect}
                onAddQuiz={this.onAddQuiz}
            />
        );
    }
}

export default QuizlistContainer;