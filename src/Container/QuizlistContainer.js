import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import Quizlist from "../View/Quizlist"
import generateId from "../IDGenerator";

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
        let quiz = {
        ISBN: generateId(5),
        check1:false,
        check2:false,
        check3:false,
        check4:false,
        };
        this.props.QuizStore.addQuiz(quiz);
    }
    onItemMouseOver = (quiz) => {
        this.props.QuizStore.ItemMouseOver(quiz)
    }

    render() {
        const quizs = this.props.QuizStore.getquizs;
        const selectquiz = this.props.QuizStore.selectquiz
        const  hoverquiz = this.props.QuizStore.hoverquiz
        const gamestart = this.props.QuizStore.getgamestart;
        console.log("gamestart :" + gamestart)
        return (
            <Quizlist  
                quizs={quizs} 
                onRemove={this.onRemove} 
                onSelect={this.onSelect}
                onAddQuiz={this.onAddQuiz}
                selectquiz={selectquiz}
                onItemMouseOver={this.onItemMouseOver}
                hoverquiz={hoverquiz}
                gamestart={gamestart}

            />
        );
    }
}

export default QuizlistContainer;